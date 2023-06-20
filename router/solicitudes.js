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
        this.router.post('/', this.controladorSolicitudes.postSolicitud
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
        this.router.delete('/rechazar/:idSolicitud', this.controladorSolicitudes.rejectSolicitud
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
        this.router.delete('/:idSolicitud', this.controladorSolicitudes.deleteSolicitud
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