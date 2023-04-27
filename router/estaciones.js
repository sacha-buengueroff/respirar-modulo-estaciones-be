import express from 'express'
import ControladorEstaciones from '../controller/estaciones.js'


export class RouterEstaciones {
    
    constructor() {
        this.router = express.Router()
        this.controladorEstaciones = new ControladorEstaciones()
    }

    start() {
        /* GET Estaciones */
        this.router.get('/estaciones/:id?', this.controladorEstaciones.getEstaciones
        // #swagger.tags = ['Estaciones']
        // #swagger.description = 'Endpoint para obtener una estación.'
        )

        /* POST Estación */
        this.router.post('/estaciones/:idSolicitud?', this.controladorEstaciones.postEstacion
        // #swagger.tags = ['Estaciones']
        // #swagger.description = 'Endpoint para publicar una estación.'
        )

        /* GET Datos de Estación */
        this.router.get('/estaciones/datosEstacion/:id', this.controladorEstaciones.getDatosEstacion
        // #swagger.tags = ['Estaciones']
        // #swagger.description = 'Endpoint para obtener datos de una estación.'
        )
        
        /* PUT Suspender Estación */
        this.router.put('/estaciones/suspenderEstacion/:id', this.controladorEstaciones.suspenderEstacion
        // #swagger.tags = ['Estaciones']
        // #swagger.description = 'Endpoint para suspender una estación.'
        )
        
        /* PUT Habilitar Estación */
        this.router.put('/estaciones/habilitarEstacion/:id', this.controladorEstaciones.habilitarEstacion
        // #swagger.tags = ['Estaciones']
        // #swagger.description = 'Endpoint para habilitar una estación.'
        )
        
        /* GET Visualización de Datos de Conexión de Estación */
        this.router.get('/estaciones/datosConexion/:id', this.controladorEstaciones.getDatosConexion
        // #swagger.tags = ['Estaciones']
        // #swagger.description = 'Endpoint para visualizar datos de conexión de estación.'
        )
        
        /* PUT Modificación de Datos de Conexión de Estación */
        this.router.put('/estaciones/datosConexion/:id', this.controladorEstaciones.putDatosConexion
        // #swagger.tags = ['Estaciones']
        // #swagger.description = 'Endpoint para modificar datos de conexión de estación.'
        )
        
        /* POST Alta Solicitud de Inscripción de Estación */
        this.router.post('/solicitudes/altaSolicitud/', this.controladorEstaciones.postSolicitud
        // #swagger.tags = ['Solicitudes']
        // #swagger.description = 'Endpoint para dar de alta una solicitud.'
        )

        /* GET Listado de Solicitudes de Inscripción de EStaciones */
        this.router.get('/solicitudes/', this.controladorEstaciones.getSolicitudes
        // #swagger.tags = ['Solicitudes']
        // #swagger.description = 'Endpoint para obtener un listado de solicitudes.'
        )

        /* POST Confirmación Solicitud */
        this.router.post('/solicitudes/:idSolicitud', this.controladorEstaciones.confirmarSolicitud
        // #swagger.tags = ['Solicitudes']
        // #swagger.description = 'Endpoint para confirmar una solicitud.'
        )
        
        return this.router
    }
}