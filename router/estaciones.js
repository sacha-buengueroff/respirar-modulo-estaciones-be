import express from 'express'
import ControladorEstaciones from '../controller/estacionesController.js'


export class RouterEstaciones {

    constructor() {
        this.router = express.Router()
        this.controladorEstaciones = new ControladorEstaciones()
    }

    start() {
        

        /* GET Estaciones de Ciudad del Futuro */
        this.router.get('/estacionesCiudad', this.controladorEstaciones.getEstacionesCiudad
        /*
        #swagger.tags = ['Estaciones']
        #swagger.description = 'Endpoint para obtener aquellas estacione pertenecientes a Ciudad del Futuro.'
        */
        )

        /* GET Estaciones totales*/
        this.router.get('/:id?', this.controladorEstaciones.getEstaciones
        /*
        #swagger.tags = ['Estaciones']
        #swagger.description = 'Endpoint para obtener una estación.'
        #swagger.parameters["id?"] = {
            in: "path",
            required: "false"
        }
        */
        )

        /* GET Visualización de Datos de Conexión de Estación */
        this.router.get('/datosConexion/:id', this.controladorEstaciones.getDatosConexion
            /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para visualizar datos de conexión de estación.'
            #swagger.parameters["id"] = {
                in: "path",
                required: "true"
            }
            */
        )

        /* PUT Suspender Estación */
        this.router.put('/suspenderEstacion/:id', this.controladorEstaciones.suspenderEstacion
            /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para suspender una estación.'
            #swagger.parameters["id"] = {
                in: "path",
                required: "true"
            }
            */
        )

        /* PUT Habilitar Estación */
        this.router.put('/habilitarEstacion/:id', this.controladorEstaciones.habilitarEstacion
            /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para habilitar una estación.'
            #swagger.parameters["id"] = {
                in: "path",
                required: "true"
            }
            */
        )

        /* PUT Modificación de Datos de Conexión de Estación */
        this.router.put('/datosConexion/:id', this.controladorEstaciones.putDatosConexion
            /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para modificar datos de conexión de estación.'
            #swagger.parameters["id"] = {
                in: "path",
                required: "true"
            }
            */
        )

        /* POST Estación */
        this.router.post('/:idSolicitud?', this.controladorEstaciones.postEstacion
            /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para publicar una estación.'
            #swagger.parameters["idSolicitud?"] = {
                in: "path",
                required: "false"
            }
            */
        )

        return this.router
    }
}