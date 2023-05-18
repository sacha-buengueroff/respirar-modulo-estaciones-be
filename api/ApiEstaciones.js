import EstacionesHttp from '../httpMethods/estacionesHttp.js'
import AgentUlHttp from '../httpMethods/agentUlHttp.js'


class ApiEstaciones {

    constructor() {
        this.estacionesHttp = new EstacionesHttp()
        this.AgentUlHttp = new AgentUlHttp()
        this.protocolo = "urn:ngsi-ld:"
        this.type = "AirQualityObserved"
    }

    getDatosEstaciones = async (id) => {
        return await this.estacionesHttp.getEstaciones(id)
    }

    postEstacion = async (formulario) => {
        // obtengo estaciones para saber la cantidad
        const estaciones = await this.estacionesHttp.getEstaciones()
        const numberId = (estaciones.length + 1)

        // Concatenacion
        formulario.id = this.type + numberId
        formulario.entityName = this.protocolo + this.type + ":" + numberId
        formulario.name = this.protocolo + formulario.name

        return this.AgentUlHttp.postEstacion(formulario)

        // TODO Envio de mail(si es externo)

    }

}

export default ApiEstaciones