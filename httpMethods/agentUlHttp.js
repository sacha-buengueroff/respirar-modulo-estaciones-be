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
        var body ={}
        
        try {
            const respuesta = await axios.post(this.url + "/devices",body,this.headers)
            return respuesta.status
        }
        catch (e) {
            throw new Error('Error creando una estación');
        }
    }

    async createService() {

        const body = {
            "services": [
                {
                    "apikey": "4jggokgpepnvsb2uv4s40d59ov",
                    "cbroker": "http://orion:1026",
                    "entity_type": "Motion",
                    "resource": "/iot/d"
                }
            ]
        }
        try {
            const respuesta = await axios.post(this.url + "/services", body, this.config)
            console.log(respuesta.status)
            return respuesta.status
        } catch (e) {
            if(e.response.status !== 409){
                throw new Error('Imagen IotAgent no esta disponible');
            }
            console.log("Service previamente creado")
        }
    }
}

export default AgentUlHttp