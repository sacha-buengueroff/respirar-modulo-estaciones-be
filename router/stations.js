import express from "express";
import ControllerStations from "../controller/stationsController.js";

export class StationRouter {
  constructor() {
    this.router = express.Router();
    this.ControllerStations = new ControllerStations();
  }
  start() {
    /* GET Estaciones de Ciudad del Futuro */
    this.router.get(
      "/estacionesCiudad",
      this.ControllerStations.getCityStations
      /*
        #swagger.tags = ['Estaciones']
        #swagger.description = 'Endpoint para obtener aquellas estacione pertenecientes a Ciudad del Futuro.'
        */
    );
    /* GET Estaciones totales*/
    this.router.get(
      "/:id?",
      this.ControllerStations.getStations
      /*
        #swagger.tags = ['Estaciones']
        #swagger.description = 'Endpoint para obtener una estación.'
        #swagger.parameters["id?"] = {
            in: "path",
            required: "false"
        }
        */
    );
    /* PUT Suspender Estación */
    this.router.put(
      "/suspenderEstacion/:id",
      this.ControllerStations.suspendStation
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para suspender una estación.'
            #swagger.parameters["id"] = {
                in: "path",
                required: "true"
            }
            */
    );
    /* PUT Habilitar Estación */
    this.router.put(
      "/habilitarEstacion/:id",
      this.ControllerStations.enableStation
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para habilitar una estación.'
            #swagger.parameters["id"] = {
                in: "path",
                required: "true"
            }
            */
    );
    /* POST Datos Estación */
    this.router.post(
      "/data/",
      this.ControllerStations.postStationData
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para publicar datos de una estación.'
            #swagger.parameters["i"] = {
                in: "query",
                required: "true"
            }
            #swagger.parameters["k"] = {
                in: "query",
                required: "true"
            }
            #swagger.parameters["i"] = {
                in: "query",
                required: "true"
            }
            #swagger.parameters['data'] = {
                in: 'body',
                description: 'Plain text data'
            }
            */
    );
    /* POST Estación */
    this.router.post(
      "/",
      this.ControllerStations.postStation
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para publicar una estación.'
            #swagger.parameters["idSolicitud?"] = {
                in: "path",
                required: "false"
            }
            #swagger.parameters['estacion'] = {
                in: 'body',
                description: 'Datos de la estación',
                required: "false",
                schema: {
                    "name": "name" , 
                    "coordinates": [
                                    -29.233012401017962,
                                    136.7063500973975
                                    ],
                    "addStreet":"Street", 
                    "addLocaly": "Localy", 
                    "addRegion":"Region" , 
                    "external": false
                }
            }
            */
    );
    this.router.get(
      "/porUsuario/:user",
      this.ControllerStations.getStationsByUser
    );
    return this.router;
  }
}
