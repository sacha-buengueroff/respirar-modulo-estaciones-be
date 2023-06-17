import { Long } from 'mongodb'
import ApiEstaciones from '../api/apiEstaciones.js'

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
        const schema = {
            name: value => !!value && value.trim() != "" ? true :  "El parametro nombre de usuario se encuentra vacio o nulo",
            coordinates: value => !!value && value.length === 2 ? true : "El parametro coordenadas es invalido",
            addStreet: value => !!value && value.trim() != "" ? true : "El parametro calle se encuentra vacio o nulo",
            addLocaly: value => !!value && value.trim() != "" ? true : "El parametro localidad se encuentra vacio o nulo",
            addRegion: value => !!value && value.trim() != "" ? true: "El parametro region se encuentra vacio o nulo",
            external: value => value != undefined && typeof value === "boolean" ? true : "El parametro external vacio o no corresponde el tipo"
        }

        const validate = async (object, schema) => {
            let response = {}

            let keys = Object.keys(schema)
            let i = 0
            let key
            while (i < keys.length && Object.keys(response).length === 0) {
                key = keys[i]
                if (!object.hasOwnProperty(key)) {
                    response.status = 400
                    response.message = "El formulario cuenta con un campo extra"
                }
                else if (!object[key] === true) {
                    response.status = 404
                    response.message = object[key]
                }
                i += 1
            }
            
            if (i == keys.length) {
                response = await this.apiSolicitudes.guardarSolicitud(solicitud)
            }

            return response
        }

        const solicitud = req.body
        let response = await validate(solicitud, schema)
        console.log(response);

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