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

    getEstacionesCiudad = async (req, res) => {
        const response = await this.apiEstaciones.getEstacionesCiudad()
        res.status(response.status).json(response.message)
    }

    postEstacion = async (req, res) => {
        let formulario = req.body
        let { name, coordinates, addStreet, addlocaly, addRegion, external } = formulario
        let response={
            status:404
        }
        console.log(typeof external);
        if (!!name && name.trim() != "") {
            if (!!coordinates && coordinates.length === 2) {
                if (!!addStreet && addStreet.trim() != "") {
                    if (!!addlocaly && addlocaly.trim() != "") {
                        if (!!addRegion && addRegion.trim() != "") {
                            if (external != undefined && typeof external === "boolean") {
                                response = await this.apiEstaciones.postEstacion(formulario)
                            } else {
                                response.mensaje = "external vacio o no corresponde el tipo"
                            }
                        } else {
                            response.mensaje = "addRegion vacio o nulo"
                        }
                    } else {
                        response.mensaje = "addlocaly vacio o nulo"
                    }
                } else {
                    response.mensaje = "addStreet vacio o nulo"
                }
            } else {
                response.mensaje = "Faltan coordenadas"
            }
        } else {
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