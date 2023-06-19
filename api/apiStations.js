import AgentUlHttp from '../httpMethods/agentUlHttp.js'
import CbHttp from '../httpMethods/cbHttp.js'
import Mailer from '../libraries/mailer.js'

class ApiStations {
    constructor() {
        this.cbHttp = new CbHttp()
        this.AgentUlHttp = new AgentUlHttp()
        this.protocol = "urn:ngsi-ld:"
        this.type = "AirQualityObserved"
    }
    getDataStations = async (id) => {
        return await this.cbHttp.getStations(id)
    }
    getCityStations = async () => {
        return await this.cbHttp.getCityStations()
    }
    suspendStation = async (id) => {
        return this.AgentUlHttp.suspendStation(id)
    }
    enableStation = async (id) => {
        return this.AgentUlHttp.enableStation(id)
    }
    getStationsByUser = async (user) => {
        return this.cbHttp.getStationsByUser(user)
    }
    postStation = async (form) => {
        // obtengo estaciones para saber la cantidad
        const stations = await this.cbHttp.getStations()
        let numberId = (stations.message.length + 1)

        // Concatenacion
        form.id = this.type + numberId
        form.entityName = this.protocol + this.type + ":" + numberId
        form.name = this.protocol + form.name

        var response = await this.AgentUlHttp.postStation(form)
        if (form.external) {
            await Mailer.sendMail(form.email, response.message.mailId)
        }
        return response
    }
    postDataStation = async (k, i, data) => {
        let id = i.split(this.type)[1]
        let station = (await this.getDataStations(`${this.protocol}${this.type}:${id}`)).message
        if (typeof(station) != "string"){
            let isEnable= typeof(station.enable) === "boolean"?station.enable:station.enable.value
            if(isEnable) {
                return await this.AgentUlHttp.postDataStation(k, i, data)
            }else {
                return {
                    status: 404,
                    message: "El dispositivo está deshabilitado"
                }
            }
        }else if (typeof(station) == "string") {
            return {
                status: 404,
                message: "El dispositivo no existe"
            }
        }
    }
}
export default ApiStations