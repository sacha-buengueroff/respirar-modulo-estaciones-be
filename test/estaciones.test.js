import supertest from "supertest";
import { expect } from "chai";

import Server from "../server.js";
import config from "../config.js";

import axios from "axios";

console.log("Prueba")

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
    })
})