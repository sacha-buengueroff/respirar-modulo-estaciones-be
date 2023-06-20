import express from 'express'
import ApplicationController from '../controller/applicationController.js'
export class ApplicationRouter {
    constructor() {
        this.router = express.Router()
        this.applicationController = new ApplicationController()
    }
    start() {
        /* GET Listado de Solicitudes de Inscripción de EStaciones */
        this.router.get('/:idSolicitud?', this.applicationController.getApplications
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
        this.router.post('/', this.applicationController.postApplication
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
        this.router.delete('/rechazar/:idSolicitud', this.applicationController.rejectApplication
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
        this.router.delete('/:idSolicitud', this.applicationController.deleteApplication
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