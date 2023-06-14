import ApiSolicitudes from '../api/apiSolicitudes.js'

class ControladorSolicitudes {

    constructor() {
        this.apiSolicitudes = new ApiSolicitudes()
    }
    
    postSolicitud = async (req,res) => {
        const solicitud = req.body
        let { name, coordinates, addStreet, addLocaly, addRegion, external, email } = solicitud
        let response = {}
        if (!!name && name.trim() != "") {
            if (!!coordinates && coordinates.length === 2) {
                if (!!addStreet && addStreet.trim() != "") {
                    if (!!addLocaly && addLocaly.trim() != "") {
                        if (!!addRegion && addRegion.trim() != "") {
                            if (external != undefined && typeof external === "boolean") {
                                if (!!email && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(email)) {
                                    response = await this.apiSolicitudes.guardarSolicitud(solicitud)
                                } else {
                                    response.status = 404
                                    response.message = "El parametro email vacio o invalido"
                                }
                            } else {
                                response.status = 404
                                response.message = "El parametro external vacio o no corresponde el tipo"
                            }
                        } else {
                            response.status = 404
                            response.message = "El parametro region se encuentra vacio o nulo"
                        }
                    } else {
                        response.status = 404
                        response.message = "El parametro localidad se encuentra vacio o nulo"
                    }
                } else {
                    response.status = 404
                    response.message = "El parametro calle se encuentra vacio o nulo"
                }
            } else {
                response.status = 404
                response.message = "Faltan coordenadas"
            }
        } else {
            response.status = 404
            response.message = "El parametro nombre de usuario se encuentra vacio o nulo"

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