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

        /* POST Datos Estación */
        this.router.post('/data/', this.controladorEstaciones.postDatosEstacion
            /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para publicar una estación.'
            #swagger.parameters["idSolicitud?"] = {
                in: "path",
                required: "false"
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

        this.router.get('/porUsuario/:user', this.controladorEstaciones.getEstacionesPorUsuario)

        return this.router


    }
}