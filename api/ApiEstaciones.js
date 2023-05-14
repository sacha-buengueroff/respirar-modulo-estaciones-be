import axios from 'axios'


class ApiEstaciones {

    getDatosEstaciones = async(id) => {
        const config = {
            headers: {
                "fiware-service": "openiot",
                "fiware-servicepath": "/"
            }
        }
        let url = "http://localhost:1026/v2/entities/"
        if (id) {
            url = url + id
        }
        const respuesta = await axios.get(url, config)        
        return respuesta.data
    }


}

export default ApiEstaciones