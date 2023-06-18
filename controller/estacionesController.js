import { Long } from 'mongodb'
import ApiEstaciones from '../api/ApiEstaciones.js'
import { validate, schema_estacion, schema_solicitud } from './schemas.js'
class ControladorEstaciones {

    constructor() {
        this.apiEstaciones = new ApiEstaciones()
    }

    getEstaciones = async (req, res) => {
        const { id } = req.params
        const response = await this.apiEstaciones.getDatosEstaciones(id)
        res.status(response.status).json(response.message)
    }

    getEstacionesCiudad = async (req, res) => {
        const response = await this.apiEstaciones.getEstacionesCiudad()
        res.status(response.status).json(response.message)
    }

    postEstacion = async (req, res) => {
        const estacion = req.body
        let response
        if (estacion.external != undefined && typeof estacion.external === "boolean") {
            response = estacion.external ? validate(estacion, schema_solicitud) : validate(estacion, schema_estacion)
        }
        else {
            response = {
                message: "El parametro external vacio o no corresponde el tipo",
                status: 404
            }
        }
        if (Object.keys(response).length === 0) {
            response = await this.apiEstaciones.postEstacion(estacion)
        }
        res.status(response.status).json(response.message)
    }

    getDatosEstacion = async (req, res) => {
        res.json({})
    }

    suspenderEstacion = async (req, res) => {
        let { id } = req.params
        const response = await this.apiEstaciones.suspenderEstacion(id)
        res.status(response.status).json(response.message)
    }

    habilitarEstacion = async (req, res) => {
        let { id } = req.params
        const response = await this.apiEstaciones.habilitarEstacion(id)
        res.status(response.status).json(response.message)
    }
    getEstacionesPorUsuario = async (req, res) => {
        let { user } = req.params
        const response = await this.apiEstaciones.getEstacionesPorUsuario(user)
        res.status(response.status).json(response.message)
    }

    postDatosEstacion = async (req, res) => {
        let {k, i} = req.query
        let data = req.body
        const response = await this.apiEstaciones.postDatosEstacion(k, i, data)
        res.status(response.status).json(response.message)
    }
}

export default ControladorEstaciones