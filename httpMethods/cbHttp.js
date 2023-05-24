import axios from 'axios'

class CbHttp {

    constructor() {
        this.url = "http://localhost:1026/"
        this.config = {
            headers: {
                "fiware-service": "openiot",
                "fiware-servicepath": "/"
            }
        }
    }

    async getCbStatus() {
        try {
            const respuesta = await axios.get(this.url + "version")
            return respuesta.status
        }
        catch (e) {
            throw new Error('Context Broker no disponible');
        }
    }

    getEstaciones = async (id) => {
        try {
            const respuesta = id ? await axios.get(this.url + "v2/entities/" + id, this.config) : await axios.get(this.url + "v2/entities/", this.config)
            return {
                status: respuesta.status,
                mensaje: respuesta.data
            }
        } catch (error) {
            return {
                status: error.response.status,
                mensaje: error.response.data.name
            }
        }

    }
    suspenderEstacion = async (id) => {
        let body = {
            "enable": {
                "value": false,
                "type": "Boolean"
            }
        }
        await axios.patch(this.url + "v2/entities/" + id + "/attrs/", body, this.config)
    }
    getEstacionesPropias = async (user) => {
        try {
            let respuesta = await axios.get(this.url + "v2/entities/?q=ownerId=='urn:ngsi-ld:" + user + "'&options=keyValues&type=AirQualityObserved", this.config)
            return {
                status: respuesta.status,
                mensaje: respuesta.data
            }
        } catch (error) {
            return {
                status: respuesta.status,
                mensaje: "No se encontraron estaciones con el usuario "+ user
            }
        }

    }
}

export default CbHttp