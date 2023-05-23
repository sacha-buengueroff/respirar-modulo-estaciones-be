import ApiSolicitudes from '../api/apiSolicitudes.js'

class ControladorSolicitudes {

    constructor() {
        this.apiSolicitudes = new ApiSolicitudes()
    }
    
    postSolicitud = async (req,res) => {
        const solicitud = req.body 
        res.json(await this.apiSolicitudes.guardarSolicitud(solicitud))
    }
    
    getSolicitudes = async (req,res) => {
        const { id } = req.params
        res.json(await this.apiSolicitudes.obtenerSolicitudes(id))
    }
}

export default ControladorSolicitudes