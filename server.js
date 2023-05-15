import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from './swagger_output.json' assert {type: 'json'};
import { RouterEstaciones } from "./router/estaciones.js";
import { RouterSolicitudes } from "./router/solicitudes.js";

class Server {
    constructor(port) {
        this.app = express()
        this.port = port
    }

    async start() {
        this.app.use(cors())
        this.app.use(express.static("public"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

        /* --------------------------------------------------------------- */
        /*                             ROUTING                             */
        /* --------------------------------------------------------------- */

        this.app.use("/estaciones", new RouterEstaciones().start());
        this.app.use("/solicitudes", new RouterSolicitudes().start());

        /* --------------------------------------------------------------- */
        /*                         SERVER LISTEN                           */
        /* --------------------------------------------------------------- */

        this.server = this.app.listen(this.port, () =>
            console.log(`Servidor express escuchando en el puerto ${this.port}`)
        );
        this.server.on("error", (error) =>
            console.log(`Error en servidor: ${error.message}`)
        );

        return this.app
    }

    async stop() {
        this.server.close()
    }
}

export default Server