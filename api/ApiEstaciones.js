import EstacionesHttp from '../httpMethods/estacionesHttp.js'


class ApiEstaciones {

    constructor(){
        this.estacionesHttp = new EstacionesHttp()
    }

    getDatosEstaciones = async(id) => {          
        return await this.estacionesHttp.getEstaciones(id)
    }

}

export default ApiEstaciones