import ApiEstaciones from '../api/apiEstaciones.js'

class ControladorEstaciones {

    constructor() {
        this.apiEstaciones = new ApiEstaciones()
    }

    getEstaciones = async (req, res) => {
        const { id } = req.params
        const response = await this.apiEstaciones.getDatosEstaciones(id)
        res.status(response.status).json(response.mensaje)
    }

    postEstacion = async (req, res) => {
        let formulario = req.body
        let { name, coordinates, addStreet, addlocaly, addRegion, external } = formulario
        let response={}
        console.log(typeof external);
        if (!!name && name.trim() != "") {
            if (!!coordinates && coordinates.length === 2) {
                if (!!addStreet && addStreet.trim() != "") {
                    if (!!addlocaly && addlocaly.trim() != "") {
                        if (!!addRegion && addRegion.trim() != "") {
                            if (external != undefined && typeof external === "boolean") {
                                response = await this.apiEstaciones.postEstacion(formulario)
                            } else {
                                response.status = 404
                                response.mensaje = "external vacio o no corresponde el tipo"
                            }
                        } else {
                            response.status = 404
                            response.mensaje = "addRegion vacio o nulo"
                        }
                    } else {
                        response.status = 404
                        response.mensaje = "addlocaly vacio o nulo"
                    }
                } else {
                    response.status = 404
                    response.mensaje = "addStreet vacio o nulo"
                }
            } else {
                response.status = 404
                response.mensaje = "Faltan coordenadas"
            }
        } else {
            response.status = 404
            response.mensaje = "name vacio o nulo"
        }
        res.status(response.status).json(response.mensaje)
    }

    getDatosEstacion = async (req, res) => {
        res.json({})
    }

    suspenderEstacion = async (req, res) => {
        res.json({})
    }

    habilitarEstacion = async (req, res) => {
        res.json({})
    }

    getDatosConexion = async (req, res) => {
        res.json({})
    }

    putDatosConexion = async (req, res) => {
        res.json({})
    }
}

export default ControladorEstaciones