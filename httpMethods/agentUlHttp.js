import axios from 'axios'

class AgentUlHttp {

    constructor() {
        this.url = "http://localhost:4041/iot"
        this.config = {
            headers: {
                "fiware-service": "openiot",
                "fiware-servicepath": "/",
                "Content-Type": "application/json"
            }
        }
        this.entityType = "AirQualityObserved"
        this.urlCb = "http://orion:1026"
        this.apikey = "4jggokgpepnvsb2uv4s40d59ov"
        this.resource = "/iot/d"
        this.protocolo = "urn:ngsi-ld:"
    }

    async getAgentStatus() {

        try {
            const respuesta = await axios.get(this.url + "/about")
            return respuesta.status
        }
        catch (e) {
            throw new Error('Imagen IotAgent no esta disponible');
        }
    }

    async postEstacion(formulario) {
        const { name, coordinates, addStreet, addlocaly, addRegion, external, id , entityName} = formulario

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
                            "value": external?"External":"Respirar"
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
                                    "addressLocality": addlocaly,
                                    "addressRegion": addRegion
                                }
                            }
                        }
                    ]
                }
            ]
        }
        
        try{
            let respuesta = await axios.post(this.url + "/devices", body , this.config)
            return {
                status: respuesta.status,
                mensaje: {
                    id: entityName
                }
            }
        }catch(e){
            return {status : e.response.status , 
                    mensaje : e.response.data.name}
        }
            
        


    }

    async createService() {

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
        const respuesta = await axios.post(this.url + "/services", body, this.config)
        return respuesta.status
    } catch (e) {
        if (e.response.status !== 409) {
            throw new Error('Imagen IotAgent no esta disponible');
        }
        console.log("Service previamente creado")
    }
}
}

export default AgentUlHttp