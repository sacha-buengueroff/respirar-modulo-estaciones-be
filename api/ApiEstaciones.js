import EstacionesHttp from '../httpMethods/estacionesHttp.js'
import AgentUlHttp from '../httpMethods/agentUlHttp.js' 


class ApiEstaciones {

    constructor(){
        this.estacionesHttp = new EstacionesHttp()
    }

    getDatosEstaciones = async(id) => {          
        return await this.estacionesHttp.getEstaciones(id)
    }

    postEstacion = async (formulario) =>{
        // obtengo numero para saber id
        const estaciones = await this.estacionesHttp.getEstaciones()

        var id = estaciones.length
       // completo el body
       
       // realizo la llamada a Agent

       // compruebo la existencia

       // TODO Envio de mail

    }

}

export default ApiEstaciones