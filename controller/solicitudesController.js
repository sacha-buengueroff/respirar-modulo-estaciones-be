import ApiSolicitudes from '../api/apiSolicitudes.js'
import { validate, schema_solicitud } from './schemas.js'

class ControladorSolicitudes {

    constructor() {
        this.apiSolicitudes = new ApiSolicitudes()
    }
    
    postSolicitud = async (req,res) => {
        const solicitud = req.body
        let response = await validate(solicitud, schema_solicitud)
        if (Object.keys(response).length === 0) {
            response = await this.apiSolicitudes.guardarSolicitud(solicitud)
        }
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