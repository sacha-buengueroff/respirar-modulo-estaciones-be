import SolicitudesFactoryDAO from '../model/DAO/solicitudesFactory.js'
import config from '../config.js'

class ApiSolicitudes {
    
    constructor() {
        this.solicitudesModel = SolicitudesFactoryDAO.get(config.MODO_PERSISTENCIA)
    }   

    obtenerSolicitudes = async id => {
        return id? await this.solicitudesModel.findSolicitud(id) : await this.solicitudesModel.findSolicitudes()
    }

    guardarSolicitud = async solicitud => {
        return await this.solicitudesModel.saveSolicitud(solicitud)
    }  
    
    actualizarSolicitud = async (solicitud, id) => {
        return await this.solicitudesModel.updateSolicitud(solicitud, id)
    }
       
    eliminarSolicitud = async id => {
        return this.solicitudesModel.deleteSolicitud(id)
    }
}

export default ApiSolicitudes