import ApiSolicitudes from '../api/apiSolicitudes.js'
import { schema_solicitud } from './schemas.js'

class ControladorSolicitudes {

    constructor() {
        this.apiSolicitudes = new ApiSolicitudes()
    }
    
    postSolicitud = async (req,res) => {
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
        let response = await validate(solicitud, schema_solicitud)
        console.log(response);

        res.status(response.status).json(response.message)
    }
    
    getSolicitudes = async (req,res) => {
        const { idSolicitud } = req.params
        let response = await this.apiSolicitudes.obtenerSolicitudes(idSolicitud)
        res.status(response.status).json(response.message)
    }

    rejectSolicitud = async (req,res) =>{
        const { idSolicitud } = req.params
        let response = await this.apiSolicitudes.rechazarSolicitud(idSolicitud)
        res.status(response.status).json(response.message)
    }

    deleteSolicitud = async (req,res) =>{
        const { idSolicitud } = req.params
        let response = await this.apiSolicitudes.eliminarSolicitud(idSolicitud)
        res.status(response.status).json(response.message)
    }
}

export default ControladorSolicitudes