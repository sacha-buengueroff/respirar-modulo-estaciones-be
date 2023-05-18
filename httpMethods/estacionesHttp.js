import axios from 'axios'

class EstacionesHttp {

    constructor() {
        this.url = "http://localhost:1026/v2/entities/"
        this.config = {
            headers: {
                "fiware-service": "openiot",
                "fiware-servicepath": "/"
            }
        }
    }

    getEstaciones = async(id) => {
        const respuesta = id? await axios.get(this.url + id, this.config) : await axios.get(this.url, this.config)          
        return respuesta.data
    }

}

export default EstacionesHttp