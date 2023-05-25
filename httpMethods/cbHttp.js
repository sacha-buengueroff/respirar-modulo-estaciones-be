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

    getEstaciones = async(id) => {
        try {
            const respuesta = id? await axios.get(this.url + "v2/entities/" + id, this.config) : await axios.get(this.url + "v2/entities/", this.config)
            return {status : respuesta.status , 
                mensaje : respuesta.data}
        } catch (error) {
            return {status : error.response.status , 
                mensaje : error.response.data.name}
        }
      
    }

    getEstacionesCiudad = async () => {
        let respuesta = {}
        this.config.params = {
            "q" : "dataProvider='Respirar'",
            "options" : "keyValues",
            "type" : "AirQualityObserved"
        }

        try {
            let llamada = await axios.get(this.url, this.config)
            respuesta.status = llamada.status
            respuesta.message = llamada.data
        } catch (error) {
            respuesta.status = error.llamada.status
            respuesta.message = error.llamada.data.description
        }
        return respuesta
    }

}

export default CbHttp