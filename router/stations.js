import express from "express";
import ControllerStations from "../controller/stationsController.js";

export class StationRouter {
  constructor() {
    this.router = express.Router();
    this.controllerStations = new ControllerStations();
  }
  start() {
    /* GET Estaciones de Ciudad del Futuro */
    this.router.get(
      "/estacionesCiudad",
      this.controllerStations.getCityStations
      /*
        #swagger.tags = ['Estaciones']
        #swagger.description = 'Endpoint para obtener aquellas estacione pertenecientes a Ciudad del Futuro.'
        #swagger.responses[200] = {
        description: "Estaciones por usuario encontradas o lista vacía",
            schema:  [{ $ref: '#/definitions/Estacion' }]
        } 
        */
    );
    /* GET Estaciones totales*/
    this.router.get(
      "/:id?",
      this.controllerStations.getStations
      /*
        #swagger.tags = ['Estaciones']
        #swagger.description = 'Endpoint para obtener una estación.'
        #swagger.parameters["id?"] = {
            in: "path",
            required: "false"
        }
         #swagger.responses[200] = {
        description: "Estaciones encontradas o lista vacía",
            schema:  [{ $ref: '#/definitions/Estacion' }]
        } 
        #swagger.responses[404] = {
                description: "Estacion inexistente (Búsqueda con Id)",
                schema: "No se ha encontrado la entidad solicitada. Compruebe el Id"
            }
        */
    );
    /* PUT Suspender Estación */
    this.router.put(
      "/suspenderEstacion/:id",
      this.controllerStations.suspendStation
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para suspender una estación.'
            #swagger.parameters["id"] = {
                in: "path",
                description: 'Id extendido formato JsonLD',
                required: "true",
            }
             #swagger.responses[200] = {
                description: "Estación deshabilitada",
                schema: "Se suspendio correctamente el dispositivo AirQualityObserved1"
            }
            #swagger.responses[404] = {
                description: "Estacion inexistente / previamente Deshabilitada",
                schema: "Error al suspender el dispositivo AirQualityObserved1"
            }
            */
    );
    /* PUT Habilitar Estación */
    this.router.put(
      "/habilitarEstacion/:id",
      this.controllerStations.enableStation
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para habilitar una estación.'
            #swagger.parameters["id"] = {
                in: "path",
                description: 'Id extendido formato JsonLD',
                required: "true",
            }
            #swagger.responses[201] = {
                description: "Estación habilitada",
                schema:  "Se habilito correctamente el dispositivo urn:ngsi-ld:AirQualityObserved:1"
            }
            #swagger.responses[400] = {
                description: "Estación inexistente",
                schema:  "No se ha encontrado la entidad solicitada. Compruebe el Id"
            }
            #swagger.responses[409] = {
                description: "Estación previamente habilitada",
                schema:  "Error al habilitar el dispositivo urn:ngsi-ld:AirQualityObserved:1"
            }
            */
    );
    /* POST Datos Estación */
    this.router.post(
      "/data/",
      this.controllerStations.postDataStation
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint que los usuarios podran utilizar para publicar datos de una estación.'
            #swagger.parameters["i"] = {
                in: "query",
                description: 'Id de estación enviado por mail',
                required: "true"
            }
            #swagger.parameters["k"] = {
                in: "query",
                description: 'ApiKey de servicio enviado por mail',
                required: "true"
            }
            #swagger.parameters['data'] = {
                in: 'body',
                description: 'Atributos a actualizar (Texto plano)',
                required: "true",
                schema: "t|1|r|1|pm1|0.5|pm10|1|pm25|1"
            }
            #swagger.responses[200] = {
                description: "Datos cargados correctamente",
                schema:  "Se cargaron correctamente los datos"
            }
            #swagger.responses[400] = {
                description: "Se envia texto plano erroneo",
                schema: "Error al cargar los datos del dispositivo AirQualityObserved1"
            }
             #swagger.responses[404] = {
                description: "Estación inexistente / Estacion Deshabilitada",
                schema:  ["El dispositivo no existe","El dispositivo esta deshabilitado"]
            }
            */
    );
    /* POST Estación */
    this.router.post(
      "/",
      this.controllerStations.postStation
      /*
            #swagger.tags = ['Estaciones']
            #swagger.description = 'Endpoint para publicar una estación.'
            #swagger.parameters['estacion'] = {
                in: 'body',
                description: 'Datos de la estación',
                required: "false",
                schema: { $ref: '#/definitions/bodyPost' }
            }
            #swagger.responses[201] = {
              description: "Estación agregada",
              schema: { $ref: '#/definitions/PostEstacion' }
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
    );
    this.router.get(
      "/porUsuario/:user",
      this.controllerStations.getStationsByUser
      /*
      #swagger.tags = ['Estaciones']
      #swagger.description = 'Endpoint para estaciones por usuario.'
      #swagger.parameters["user"] = {
          in: "path",
          required: "true"
      }
      #swagger.responses[200] = {
        description: "Estaciones por usuario encontradas o lista vacía",
            schema:  [{ $ref: '#/definitions/Estacion' }]
        }       
      */
    );
    return this.router;
  }
}
