import AgentUlHttp from '../httpMethods/agentUlHttp.js'
import CbHttp from '../httpMethods/cbHttp.js'

class ApiEstaciones {

    constructor() {
        this.cbHttp = new CbHttp()
        this.AgentUlHttp = new AgentUlHttp()
        this.protocolo = "urn:ngsi-ld:"
        this.type = "AirQualityObserved"
    }

    getDatosEstaciones = async (id) => {
        return await this.cbHttp.getEstaciones(id)
    }

    postEstacion = async (formulario) => {
        // obtengo estaciones para saber la cantidad
        const estaciones = await this.cbHttp.getEstaciones()
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