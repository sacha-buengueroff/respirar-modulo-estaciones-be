import axios from 'axios'

class CbHttp {

    constructor() {
        this.url = "http://localhost:1026/"
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

}

export default CbHttp