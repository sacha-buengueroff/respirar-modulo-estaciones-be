import SolicitudesFactoryDAO from '../model/DAO/solicitudesFactory.js'
import config from '../config.js'
import Mailer from '../libraries/mailer.js'

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
        let solicitud = await this.solicitudesModel.deleteSolicitud(id)
        await Mailer.enviarMailRechazo(solicitud.email)
        return solicitud
    }
}

export default ApiSolicitudes