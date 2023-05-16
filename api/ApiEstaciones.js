import axios from 'axios'


class ApiEstaciones {

    constructor() {
        this.url = "http://localhost:1026/v2/entities/"
        this.config = {
            headers: {
                "fiware-service": "openiot",
                "fiware-servicepath": "/"
            }
        }
    }

    getDatosEstaciones = async(id) => {
        const respuesta = id? await axios.get(this.url + id, this.config) : await axios.get(this.url, this.config)          
        return respuesta.data
    }

}

export default ApiEstaciones