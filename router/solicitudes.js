import express from 'express'
import ControladorSolicitudes from '../controller/solicitudes.js'


export class RouterSolicitudes {
    
    constructor() {
        this.router = express.Router()
        this.controladorSolicitudes = new ControladorSolicitudes()
    }

    start() {
        /* GET Listado de Solicitudes de Inscripción de EStaciones */
        this.router.get('/:idSolicitud?', this.controladorSolicitudes.getSolicitudes
        /*
        #swagger.tags = ['Solicitudes']
        #swagger.description = 'Endpoint para obtener un listado de solicitudes.'
        #swagger.parameters["idSolicitud?"] = {
            in: "path",
            required: "false"
        }
        */
        )

        /* POST Alta Solicitud de Inscripción de Estación */
        this.router.post('/', this.controladorSolicitudes.postSolicitud
        /*
        #swagger.tags = ['Solicitudes']
        #swagger.description = 'Endpoint para dar de alta una solicitud.'
        */
        )

        return this.router
    }
}