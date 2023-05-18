
import CbHttp from '../httpMethods/cbHttp.js'

class ApiEstaciones {

    constructor(){
        this.contexBrokerHttp = new CbHttp()
    }

    getDatosEstaciones = async(id) => {          
        return await this.contexBrokerHttp.getEstaciones(id)
    }

}

export default ApiEstaciones