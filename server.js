import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from './swagger_output.json' assert {type: 'json'};
import { RouterEstaciones } from "./router/estaciones.js";
import { RouterSolicitudes } from "./router/solicitudes.js";
import CnxMongoDB from "./model/DB.js";
import config from "./config.js";
import ApiCheck from "./api/apiCheck.js";
import bodyParser from "body-parser"

class Server {
    constructor(port, persistencia) {
        this.app = express()
        this.port = port
        this.apiCheck = new ApiCheck()
        this.persistencia = persistencia
    }

    async start() {
        this.app.use(cors())
        this.app.use(express.static("public"));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
        this.app.use(bodyParser.text());

        /* --------------------------------------------------------------- */
        /*                             ROUTING                             */
        /* --------------------------------------------------------------- */

        this.app.use("/estaciones", new RouterEstaciones().start());
        this.app.use("/solicitudes", new RouterSolicitudes().start());

        /* --------------------------------------------------------------- */
        /*                         SERVER LISTEN                           */
        /* --------------------------------------------------------------- */

        if (config.MODO_PERSISTENCIA.toUpperCase() === "MONGO") {
            await CnxMongoDB.conectar();
        }
        
        //Chequea status y config de IotAgentUl
        await this.apiCheck.checkAgentUl()
        await this.apiCheck.checkCb()
        

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
        await CnxMongoDB.desconectar()
    }
}

export default Server