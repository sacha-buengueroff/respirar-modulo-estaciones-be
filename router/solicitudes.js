import express from 'express'
import ControladorSolicitudes from '../controller/solicitudesController.js'


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
        #swagger.responses[200] = {
            description: "Solicitudes encontradas o lista vacia (Búsqueda sin Id)",
            schema: [{ $ref: '#/definitions/Solicitud' }]
        }  
        #swagger.responses[400] = {
        description: "Estación no encontrada (Búsqueda con Id)",
        schema: "No se encontró solicitud con el id enviado"
           }  
        */
        )

        /* POST Alta Solicitud de Inscripción de Estación */
        this.router.post('/', this.controladorSolicitudes.postSolicitud
        /*
        #swagger.tags = ['Solicitudes']
        #swagger.description = 'Endpoint para dar de alta una solicitud.'
        #swagger.parameters["solicitud"] = {
            in: "body",
            required: "true"
        }
        */
        )
        /* POST Rechazo Solicitud de Inscripción de Estación */
        this.router.delete('/rechazar/:idSolicitud', this.controladorSolicitudes.rejectSolicitud
        /*
        #swagger.tags = ['Solicitudes']
        #swagger.description = 'Endpoint para eliminación de solicitudes.'
        #swagger.parameters["idSolicitud?"] = {
            in: "path",
            required: "true"
        }
        */
        )

        /* POST Eliminar Solicitud de Inscripción de Estación */
        this.router.delete('/:idSolicitud', this.controladorSolicitudes.deleteSolicitud
        /*
        #swagger.tags = ['Solicitudes']
        #swagger.description = 'Endpoint para eliminación de solicitudes.'
        #swagger.parameters["idSolicitud?"] = {
            in: "path",
            required: "true"
        }
        */
        )


        return this.router
    }
}