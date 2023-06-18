import supertest from "supertest";
import { expect } from "chai";

import Server from "../server.js";
import config from "../config.js";

import axios from "axios";

describe("test endpoints estaciones", () => {
    let server;
    let app;

    let request;
    let urlIot = "http://localhost:4041/iot/devices/"
    let urlCb = "http://localhost:1026/v2/entities/"
    let req_config = {
        headers: {
            "fiware-service": "openiot",
            "fiware-servicepath": "/"
        }
    } 

    before(async () => {
        server = new Server(config.PORT, config.MODO_PERSISTENCIA);
        app = await server.start();

        request = supertest(app);
    });

    after(async () => {
        await server.stop();
    });

    describe("GET estaciones ciudad", async () => {
        let id_iot;
        let id_cb;

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
                external: false
            }
            let response = await request.post("/estaciones/").send(body)
            id_iot = response.body.mailId
            id_cb = response.body.id
        })

        after(async () => {
            await axios.delete(`${urlCb}${id_cb}`, req_config)
            await axios.delete(`${urlIot}${id_iot}`, req_config)
        })

        it("Debería retornar todas las estaciones respirAR (si las hay)", async () => {
            let response = await request.get("/estaciones/estacionesCiudad")
            expect(response.status).to.eql(200)

            let estaciones = response.body;
            estaciones.forEach((estacion) => {
                expect(estacion).to.include.keys(
                    "id",
                    "type",
                    "TimeInstant",
                    "address",
                    "dataProvider",
                    "enable",
                    "location",
                    "ownerId",
                    "pm1",
                    "pm10",
                    "pm25",
                    "reliability",
                    "temperature"
                );
            });

        })

        
    })

    describe("GET estaciones", async () => {
        let id_iot
        let id_cb

        before(async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: false
            }
            let response = await request.post("/estaciones/").send(body)
            id_iot =  response.body.mailId
            id_cb =  response.body.id
        })

        after(async () => {
            await axios.delete(`${urlCb}${id_cb}`, req_config)
            await axios.delete(`${urlIot}${id_iot}`, req_config)
        })

        it("Debería retornar la estacion especifica cuando se pasa id", async () => {
            let response = await request.get(`/estaciones/${id_cb}`)
            
            expect(response.status).to.eql(200)

            let estacion = response.body;
            expect(estacion).to.include.keys(
                "id",
                "type",
                "TimeInstant",
                "address",
                "dataProvider",
                "enable",
                "location",
                "ownerId",
                "pm1",
                "pm10",
                "pm25",
                "reliability",
                "temperature"
            );
        })

        it("Debería retornar todas las estaciones si no se envía el id", async () => {
            let response = await request.get("/estaciones")
            expect(response.status).to.eql(200)

            let estaciones = response.body
            estaciones.forEach(estacion => {
                expect(estacion).to.include.keys(
                    "id",
                    "type",
                    "TimeInstant",
                    "address",
                    "dataProvider",
                    "enable",
                    "location",
                    "ownerId",
                    "pm1",
                    "pm10",
                    "pm25",
                    "reliability",
                    "temperature"
                )
            })
        })

        it("Debería retornar error si se pasa un id invalido", async () => {
            let id_invalido = "aaaaaa"
            let response = await request.get(`/estaciones/${id_invalido}`)

            expect(response.status).to.eql(404)
            expect(response.body).to.eql("The requested entity has not been found. Check type and id")
        })
    })

    describe("PUT suspender/habilitar estación", async () => {
        let id_iot
        let id_cb

        before(async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: false
            }
            let response = await request.post("/estaciones/").send(body)
            id_iot = response.body.mailId
            id_cb = response.body.id
        })

        after(async () => {
            await axios.delete(`${urlCb}${id_cb}`, req_config)
            await axios.delete(`${urlIot}${id_iot}`, req_config)
        })

        it("Debería suspender la estación habilitada", async () => {
            let response = await request.put(`/estaciones/suspenderEstacion/${id_cb}`)
            expect(response.status).to.eql(204)
        })

        it("Debería arrojar error al suspender la estación suspendida", async () => {
            let response = await request.put(`/estaciones/suspenderEstacion/${id_cb}`)
            expect(response.status).to.eql(404)
            expect(response.body).to.eql(`Error al suspender el dispositivo ${id_iot}`)
        })

        it("Debería habilitar la estación suspendida", async () => {
            let response = await request.put(`/estaciones/habilitarEstacion/${id_cb}`)
            expect(response.status).to.eql(201)
            expect(response.body).to.eql(`Se habilito correctamente el dispositivo ${id_cb}`)
        })

        it("Debería arrojar error al habilitar la estación habilitada", async () => {
            let response = await request.put(`/estaciones/habilitarEstacion/${id_cb}`)
            expect(response.status).to.eql(409)
            expect(response.body).to.eql(`Error al habilitar el dispositivo ${id_cb}`)
        })
    })

    describe("POST datos de estación", async () => {
        let id_iot
        let id_cb
        let key = "4jggokgpepnvsb2uv4s40d59ov"
        let body_data = "r|1|t|22|pm1|10|pm10|5|pm25|5"

        before(async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: false
            }
            let response = await request.post("/estaciones/").send(body)
            id_iot = response.body.mailId
            id_cb = response.body.id
        })

        after(async () => {
            await axios.delete(`${urlCb}${id_cb}`, req_config)
            await axios.delete(`${urlIot}${id_iot}`, req_config)
        })

        it("Debería enviar los datos al dispositivo", async () => {
            let response = await request.post(`/estaciones/data/?k=${key}&i=${id_iot}`)
            .set({
                'Content-Type': 'text/plain'
            }).send(body_data)
            expect(response.status).to.eql(200)
            expect(response.body).to.eql("Se cargaron correctamente los datos")
        })

        it("Debería arrojar error al intentar enviar datos a un dispositivo deshabilitado", async () => {
            await request.put(`/estaciones/suspenderEstacion/${id_cb}`)
            let response = await request.post(`/estaciones/data/?k=${key}&i=${id_iot}`)
            .set({
                'Content-Type': 'text/plain'
            }).send(body_data)
            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El dispositivo está deshabilitado")
            await request.put(`/estaciones/habilitarEstacion/${id_cb}`)
        })

        it("Debería arrojar error al intentar enviar datos a un id invalido", async () => {
            let response = await request.post(`/estaciones/data/?k=${key}&i=${id_iot}aa`)
            .set({
                'Content-Type': 'text/plain'
            }).send(body_data)
            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El dispositivo no existe")
        })

    })

    describe("POST estación externa", async () => {

        let ids = []

        after(() => {
            ids.forEach(async id => {
                await axios.delete(`${urlIot}${id.id_iot}`, req_config)
                await axios.delete(`${urlCb}${id.id_cb}`, req_config)
            });
        })

        it("Debería crear exitosamente la estación", async () => {
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
                email:"hola@gmail.com"
            }
            let response = await request.post("/estaciones/").send(body)
            let id_iot = response.body.mailId
            let id_cb = response.body.id
            ids.push({id_iot, id_cb})

            expect(response.status).to.eql(201)
            expect(response.body).to.include.keys(
                "id",
                "mailId"
            )
        })

        it("Debería arrojar error si falta un campo", async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                email:"hola@gmail.com"
            }
            let response = await request.post("/estaciones/").send(body)
            let id_iot = response.body.mailId
            let id_cb = response.body.id
            ids.push({id_iot, id_cb})

            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El parametro external vacio o no corresponde el tipo")
        })

        it("Debería arrojar error si hay campo extra", async () => {
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
                campoExtra: "Este es un campo extra",
                email:"hola@gmail.com"
            }
            let response = await request.post("/estaciones/").send(body)
            let id_iot = response.body.mailId
            let id_cb = response.body.id
            ids.push({id_iot, id_cb})

            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El formulario cuenta con un campo extra")
        })
    })

    describe("POST estación interna", async () => {

        let ids = []

        after(() => {
            ids.forEach(async id => {
                await axios.delete(`${urlIot}${id.id_iot}`, req_config)
                await axios.delete(`${urlCb}${id.id_cb}`, req_config)
            });
        })

        it("Debería crear exitosamente la estación", async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: false
            }
            let response = await request.post("/estaciones/").send(body)
            let id_iot = response.body.mailId
            let id_cb = response.body.id
            ids.push({id_iot, id_cb})

            expect(response.status).to.eql(201)
            expect(response.body).to.include.keys(
                "id",
                "mailId"
            )
        })

        it("Debería arrojar error si falta un campo", async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA"
            }
            let response = await request.post("/estaciones/").send(body)
            let id_iot = response.body.mailId
            let id_cb = response.body.id
            ids.push({id_iot, id_cb})

            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El parametro external vacio o no corresponde el tipo")
        })

        it("Debería arrojar error si hay campo extra", async () => {
            let body = {
                name: "Obelisco",
                coordinates: [
                    "111",
                    "222"
                ],
                addStreet: "Av. 9 de Julio",
                addLocaly: "San Nicolas",
                addRegion: "CABA",
                external: false,
                email:"mailextra@gmail.com"
            }
            let response = await request.post("/estaciones/").send(body)
            let id_iot = response.body.mailId
            let id_cb = response.body.id
            ids.push({id_iot, id_cb})

            expect(response.status).to.eql(404)
            expect(response.body).to.eql("El formulario cuenta con un campo extra")
        })
    })
})