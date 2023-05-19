import ApiEstaciones from '../api/apiEstaciones.js' 

class ControladorEstaciones {

    constructor() {
        this.apiEstaciones = new ApiEstaciones()
    }

    getEstaciones = async (req,res) => {
        const {id} = req.params
        const response= await this.apiEstaciones.getDatosEstaciones(id)
        res.status(response.status).json(response.mensaje)
    }

    postEstacion = async (req,res) => {
        let formulario = req.body
        const response = await this.apiEstaciones.postEstacion(formulario)
        res.status(response.status).json(response)
    }

    getDatosEstacion = async (req,res) => {
        res.json({})
    }

    suspenderEstacion = async (req,res) => {
        res.json({})
    }

    habilitarEstacion = async (req,res) => {
        res.json({})
    }

    getDatosConexion = async (req,res) => {
        res.json({})
    }

    putDatosConexion = async (req,res) => {
        res.json({})
    }
}

export default ControladorEstaciones