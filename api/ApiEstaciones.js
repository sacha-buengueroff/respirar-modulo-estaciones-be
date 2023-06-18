import AgentUlHttp from '../httpMethods/agentUlHttp.js'
import CbHttp from '../httpMethods/cbHttp.js'
import Mailer from '../libraries/mailer.js'

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

    getEstacionesCiudad = async () => {
        return await this.cbHttp.getEstacionesCiudad()
    }

    postEstacion = async (formulario) => {
        // obtengo estaciones para saber la cantidad
        const estaciones = await this.cbHttp.getEstaciones()
        let numberId = (estaciones.message.length + 1)

        // Concatenacion
        formulario.id = this.type + numberId
        formulario.entityName = this.protocolo + this.type + ":" + numberId
        formulario.name = this.protocolo + formulario.name

        var response = await this.AgentUlHttp.postEstacion(formulario)
        if (formulario.external) {
            await Mailer.enviarMail(formulario.email, response.message.mailId)

        }

        return response
    }

    suspenderEstacion = async (id) => {
        return this.AgentUlHttp.suspenderEstacion(id)
    }
    habilitarEstacion = async (id) => {
        return this.AgentUlHttp.habilitarEstacion(id)
    }
    getEstacionesPorUsuario = async (user) => {
        return this.cbHttp.getEstacionesPorUsuario(user)
    }

    postDatosEstacion = async (k, i, data) => {
        let id = i.split(this.type)[1]
        let estacion = (await this.getDatosEstaciones(`${this.protocolo}${this.type}:${id}`)).message
        if (typeof(estacion) != "string"){
            let habilitada= typeof(estacion.enable) === "boolean"?estacion.enable:estacion.enable.value
            if(habilitada) {
                return await this.AgentUlHttp.postDatosEstacion(k, i, data)
            }else {
                return {
                    status: 404,
                    message: "El dispositivo está deshabilitado"
                }
            }
        }else if (typeof(estacion) == "string") {
            return {
                status: 404,
                message: "El dispositivo no existe"
            }
        }
    }
}

export default ApiEstaciones