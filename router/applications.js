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
        #swagger.description = 'Endpoint para obtener un listado de solicitudes o buscar una solicitud por id.'
        #swagger.parameters["idSolicitud?"] = {
            in: "path",
            required: "false"
        }
        #swagger.responses[200] = {
            description: "Solicitudes encontradas o lista vacia",
            schema: [{ $ref: '#/definitions/Solicitud' }]
        }  
        #swagger.responses[400] = {
            description: "Estación no encontrada (Búsqueda con Id)",
            schema: "No se encontró solicitud con el id enviado"
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
        #swagger.parameters['solicitud'] = {
            in: 'body',
            description: 'Datos de la estación',
            required: "false",
            schema: { $ref: '#/definitions/bodyPost' }
        }
        #swagger.responses[200] = {
            description: "Solicitud agregada",
            schema: { $ref: '#/definitions/Solicitud' }
        }
        #swagger.responses[404] = {
            description: "Parametros erroneos, alguno de los siguientes mensajes",
            schema: [ "El parametro nombre de usuario se encuentra vacio o nulo",
                        "El parametro coordenadas es invalido",
                        "El parametro calle se encuentra vacio o nulo",
                        "El parametro localidad se encuentra vacio o nulo",
                        "El parametro region se encuentra vacio o nulo",
                        "El parametro external vacio o no corresponde el tipo",
                        "El parametro email vacio o invalido",
                        "El formulario cuenta con un campo extra"]
        }
        */
        )
        /* POST Rechazo Solicitud de Inscripción de Estación */
        this.router.delete('/rechazar/:idSolicitud', this.applicationController.rejectApplication
        /*
        #swagger.tags = ['Solicitudes']
        #swagger.description = 'Endpoint para eliminación de solicitudes, adicionalmente notifica por mail a solicitante.'
        #swagger.parameters["idSolicitud"] = {
            in: "path",
            required: "true"
        }
        #swagger.responses[200] = {
            description: "Solicitud Rechazada",
            schema: [{ $ref: '#/definitions/Solicitud' }]
        }  
        #swagger.responses[400] = {
           description: "Estación no encontrada",
           schema: "No se encontró solicitud con el id enviado"
           } 

        */
        )
        /* POST Eliminar Solicitud de Inscripción de Estación */
        this.router.delete('/:idSolicitud', this.applicationController.deleteApplication
        /*
        #swagger.tags = ['Solicitudes']
        #swagger.description = 'Endpoint para eliminación de solicitudes.'
        #swagger.parameters["idSolicitud"] = {
            in: "path",
            required: "true"
        }
        #swagger.responses[200] = {
            description: "Solicitud Rechazada",
            schema: [{ $ref: '#/definitions/Solicitud' }]
        }  
        #swagger.responses[400] = {
           description: "Estación no encontrada",
           schema: "No se encontró solicitud con el id enviado"
           } 
        */
        )
        return this.router
    }
}