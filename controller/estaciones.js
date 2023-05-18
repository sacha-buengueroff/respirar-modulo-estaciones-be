import ApiEstaciones from '../api/apiEstaciones.js' 

class ControladorEstaciones {

    constructor() {
        this.apiEstaciones = new ApiEstaciones()
    }

    getEstaciones = async (req,res) => {
        const {id} = req.params
        res.json(await this.apiEstaciones.getDatosEstaciones(id))
    }

    postEstacion = async (req,res) => {
        const formulario = req.body
        res.json(await this.apiEstaciones.postEstacion(formulario))
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