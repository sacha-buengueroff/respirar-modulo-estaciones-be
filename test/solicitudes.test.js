import supertest from "supertest";
import { expect } from "chai";

import Server from "../server.js";
import config from "../config.js";

describe("test endpoints solicitudes", () => {
    let server;
    let app;

    let request;

    let ids = []
    before(async () => {
        server = new Server(config.PORT, config.MODO_PERSISTENCIA);
        app = await server.start();

        request = supertest(app);
    });

    after(async () => {
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i];
            await request.delete(`/solicitudes/${id}`)
        }
        await server.stop();
    });

    describe("GET", async () => {
        let id;

        before(async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "123",
                    "456"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: true,
                email: "sachabuengue@gmail.com"
            }
            let response = await request.post("/solicitudes").send(body)
            id = response.body._id
        })

        after(async () => {
            await request.delete(`/solicitudes/${id}`)
        })

        it("Debería retornar todas las solicitudes (o ninguna si no hay) en caso de no enviar un id", async () => {
            let response = await request.get("/solicitudes")
            expect(response.status).to.eql(200)

            let solicitudes = response.body;
            solicitudes.forEach((solicitud) => {
                expect(solicitud).to.include.keys(
                    "_id",
                    "name",
                    "coordinates",
                    "addStreet",
                    "addLocaly",
                    "addRegion",
                    "external",
                    "email"
                );
            });

        })

        it("Debería retornar la solicitud especifica cuando se pasa id", async () => {
            let response = await request.get(`/solicitudes/${id}`)
            expect(response.status).to.eql(200)

            let solicitud = response.body
            expect(solicitud).to.include.keys(
                "_id",
                "name",
                "coordinates",
                "addStreet",
                "addLocaly",
                "addRegion",
                "external",
                "email"
            );
        })

        it("Debería retornar un error si se envía un id invalido", async () => {
            let id = "aaaaaaaaaaaaaaaaaaaaaaaa"
            let response = await request.get(`/solicitudes/${id}`)
            expect(response.status).to.eql(400)

            let mensaje = response.body
            expect(mensaje).to.eql("No se encontró solicitud con el id enviado");
        })
    })

    describe("POST", async () => {
        it("Se envia correctamente la solicitud con todos sus campos necesarios y ninguno extra", async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: true,
                email: "sachabuengue@gmail.com"
            }
            let response = await request.post("/solicitudes").send(body)
            expect(response.status).to.eql(200)
            expect(response.body).to.include.keys(
                "_id",
                "name",
                "coordinates",
                "addStreet",
                "addLocaly",
                "addRegion",
                "external",
                "email"
            )
            ids.push(response.body._id)
        })

        it("Se envía una solicitud con nombre faltante", async () => {
            let body = {
                coordinates: [
                    "444",
                    "555"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: true,
                email: "sachabuengue@gmail.com"
            }
            let response = await request.post("/solicitudes").send(body)
            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El parametro nombre de usuario se encuentra vacio o nulo")
        })

        it("Se envía una solicitud con un campo extra", async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "666",
                    "777"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: true,
                email: "sachabuengue@gmail.com",
                adicional: "Este campo es adicional"
            }
            let response = await request.post("/solicitudes").send(body)
            if (response.status == 200) {
                await request.delete(`/solicitudes/${response.body._id}`)
            }
            
            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El formulario cuenta con un campo extra")
        })
    })

    describe("DELETE", async () => {
        let id;

        before(async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "-34.6255612",
                    "-58.4070593"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: true,
                email: "sachabuengue@gmail.com"
            }
            let response = await request.post("/solicitudes").send(body)
            id = response.body._id
        })

        after(async () => {
            await request.delete(`/solicitudes/${id}`)
        })

        it("Se elimina una solicitud con un id equivocado", async () => {
            let id_invalido = "aaaaaaaaaaaaaaaaaaaaaaaa"
            let response = await request.delete(`/solicitudes/${id_invalido}`)

            expect(response.status).to.eql(400)
            expect(response.body).to.eql("No se encontró solicitud con el id enviado")
        })

        it("Se elimina una solicitud con un id valido", async () => {
            let response = await request.delete(`/solicitudes/${id}`)
            let solicitud = response.body

            expect(response.status).to.eql(200)         
            expect(solicitud).to.include.keys(
                "_id",
                "name",
                "coordinates",
                "addStreet",
                "addLocaly",
                "addRegion",
                "external",
                "email"
            );
        })
    })
})