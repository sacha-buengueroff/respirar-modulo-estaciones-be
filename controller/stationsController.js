import ApiStations from '../api/apiStations.js'
import { validate, schema_station, schema_application } from './schemas.js'

class StationsController {
    constructor() {
        this.apiStations = new ApiStations()
    }
    getStations = async (req, res) => {
        const { id } = req.params
        const response = await this.apiStations.getDataStations(id)
        res.status(response.status).json(response.message)
    }
    getCityStations = async (req, res) => {
        const response = await this.apiStations.getCityStations()
        res.status(response.status).json(response.message)
    }
    suspendStation = async (req, res) => {
        let { id } = req.params
        const response = await this.apiStations.suspendStation(id)
        res.status(response.status).json(response.message)
    }
    enableStation = async (req, res) => {
        let { id } = req.params
        const response = await this.apiStations.enableStation(id)
        res.status(response.status).json(response.message)
    }
    getStationsByUser = async (req, res) => {
        let { user } = req.params
        const response = await this.apiStations.getStationsByUser(user)
        res.status(response.status).json(response.message)
    }
    postDataStation = async (req, res) => {
        let {k, i} = req.query
        let data = req.body
        const response = await this.apiStations.postDataStation(k, i, data)
        res.status(response.status).json(response.message)
    }
    postStation = async (req, res) => {
        const station = req.body
        let response
        if (station.external != undefined && typeof station.external === "boolean") {
            response = station.external ? validate(station, schema_application) : validate(station, schema_station)
        }else {
            response = {
                message: "El parametro external vacio o no corresponde el tipo",
                status: 404
            }
        }
        if (Object.keys(response).length === 0) {
            response = await this.apiStations.postStation(station)
        }
        res.status(response.status).json(response.message)
    }
}

export default StationsController