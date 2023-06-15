import axios from 'axios'
import CbHttp from '../httpMethods/cbHttp.js'

class AgentUlHttp {

    constructor() {
        this.cbHttp = new CbHttp()
        this.url = "http://localhost:4041/iot"
        this.config = {
            headers: {
                "fiware-service": "openiot",
                "fiware-servicepath": "/",
                "Content-Type": "application/json"
            }
        }
        this.postConfig = {
            headers: {
                "Content-Type": "text/plain"
            }
        }
        this.entityType = "AirQualityObserved"
        this.urlCb = "http://orion:1026"
        this.apikey = "4jggokgpepnvsb2uv4s40d59ov"
        this.resource = "/iot/d"
        this.urlNorthbound = "http://localhost:7897/iot/d"
    }

    async getAgentStatus() {

        try {
            const response = await axios.get(this.url + "/about")
            return response.status
        }
        catch (e) {
            throw new Error('Imagen IotAgent no esta disponible');
        }
    }

    async postEstacion(form) {
        const { name, coordinates, addStreet, addLocaly, addRegion, external, id, entityName } = form
        let body = {
            "devices": [
                {
                    "device_id": id,
                    "entity_name": entityName,
                    "entity_type": this.entityType,
                    "attributes": [
                        {
                            "object_id": "r",
                            "name": "reliability",
                            "type": "Float"
                        },
                        {
                            "object_id": "t",
                            "name": "temperature",
                            "type": "Float"
                        },
                        {
                            "object_id": "pm25",
                            "name": "pm25",
                            "type": "Float"
                        },
                        {
                            "object_id": "pm10",
                            "name": "pm10",
                            "type": "Float"
                        },
                        {
                            "object_id": "pm1",
                            "name": "pm1",
                            "type": "Float"
                        }
                    ],
                    "static_attributes": [
                        {
                            "name": "dataProvider",
                            "type": "String",
                            "value": external ? "External" : "Respirar"
                        },
                        {
                            "name": "enable",
                            "type": "Boolean",
                            "value": true
                        },
                        {
                            "name": "ownerId",
                            "type": "String",
                            "value": name
                        },
                        {
                            "name": "location",
                            "type": "Point",
                            "value": {
                                "coordinates": coordinates
                            }
                        },
                        {
                            "name": "address",
                            "type": "Address",
                            "value": {
                                "address": {
                                    "streetAddress": addStreet,
                                    "addressLocality": addLocaly,
                                    "addressRegion": addRegion
                                }
                            }
                        }
                    ]
                }
            ]
        }

        try {
            let respuesta = await axios.post(this.url + "/devices", body, this.config)
            return {
                status: respuesta.status,
                message: {
                    id: entityName,
                    mailId: id
                }

            }
        } catch (e) {
            return {
                status: e.response.status,
                message: e.response.data.name
            }
        }
    }
    async checkService() {
        let call
        try{
           call = await axios.get(this.url+ "/services/" , this.config)
        }catch(e){
            console.log(e)
            throw new Error('Error al intentar obtener service group mediante agentUl');
        }
        // if array contains almost one service group
        if(call.data.length > 0){
            console.log("Service previamente creado")
        }else{
            await this.createService()
        }
    } 
     async createService(){
        const body = {
            "services": [
                {
                    "apikey": this.apikey,
                    "cbroker": this.urlCb,
                    "entity_type": this.entityType,
                    "resource": this.resource
                }
            ]
        }
        try {
            await axios.post(this.url + "/services", body, this.config)
            console.log("Service creado")
        } catch (e) {
                throw new Error('Imagen IotAgent no esta disponible');
        }
    }
    async suspenderEstacion(id) {
        try {
            await this.cbHttp.suspenderEstacion(id)
            id = id.split(":").slice(2).join("")
            const response = await axios.delete(this.url + "/devices/" + id, this.config)
            return {
                status: response.status,
                message: "Se suspendio correctamente el dispositivo " + id
            }
        } catch (e) {
            return {
                status: e.response.status,
                message: "Error al suspender el dispositivo " + id
            }
        }
    }
    async habilitarEstacion(id) {
        try {
            let estacion = await this.cbHttp.getEstaciones(id)
            estacion = estacion.message;
            let form = {
                id: estacion.id.split(":").slice(2).join(""),
                entityName: estacion.id,
                name: estacion.ownerId.value,
                coordinates: estacion.location.value.coordinates,
                addStreet: estacion.address.value.address.streetAddress,
                addLocaly: estacion.address.value.address.addressLocality,
                addRegion: estacion.address.value.address.addressRegion,
                external: (estacion.dataProvider.value != "Respirar")
            }
            var response = await this.postEstacion(form)
            if (response.status > 199 && response.status < 300) {
                return {
                    status: response.status,
                    message: "Se habilito correctamente el dispositivo " + id
                }
            } else {
                const axiosError = {
                    isAxiosError: true,
                    response: {
                        status: response.status,
                        data: { message: 'Recurso no encontrado' },
                    }
                }
                throw axiosError
            }

        } catch (e) {
            return {
                status: e.response.status,
                message: "Error al habilitar el dispositivo " + id
            }
        }
    }

    async postDatosEstacion(k, i, data) {
        try {
            let response = await axios.post(`${this.urlNorthbound}?k=${k}&i=${i}`, data, this.postConfig)
            if (response.status > 199 && response.status < 300) {
                return {
                    status: response.status,
                    message: "Se cargaron correctamente los datos"
                }
            } else {
                const axiosError = {
                    isAxiosError: true,
                    response: {
                        status: response.status,
                        data: { message: 'Error en la carga de datos' },
                    }
                }
                throw axiosError
            }
        }
        catch (e) {
            return {
                status: e.response.status,
                message: "Error al cargar los datos del dispositivo " + i
            }
        }
    }
}

export default AgentUlHttp