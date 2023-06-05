import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'


class SolicitudesMongoDB {

    findSolicitud = async id => {
        if(!CnxMongoDB.connection) return {}
        try {
            let solicitud = await CnxMongoDB.db.collection("solicitudes").findOne({_id: new ObjectId(id)})
            return solicitud
        }
        catch (error) {
            return {error: error.message}
        }
    } 
    
    findSolicitudes = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let solicitudes = await CnxMongoDB.db.collection('solicitudes').find({}).toArray()
            return solicitudes
        }
        catch (error){
            return {error: error.message}
        }
    } 
    
    saveSolicitud = async solicitud => {
        if(!CnxMongoDB.connection) return {}
        try {
            await CnxMongoDB.db.collection("solicitudes").insertOne(solicitud)
            return solicitud
        }
        catch (error) {
            return {error: error.message}
        }
    }
    
    updateSolicitud = async (solicitud, id) => {
        if(!CnxMongoDB.connection) return {}
        try {
            await CnxMongoDB.db.collection('solicitudes').updateOne(
                {_id: ObjectId(id)},
                {$set: solicitud}
            )
            let solicitudActualizado = await this.findSolicitud(id)
            return solicitudActualizado
        }
        catch(error) {
            return {error: error.message}
        }
    }
    
    deleteSolicitud = async id => {
        if(!CnxMongoDB.connection) return {}
        try {
            let solicitudEliminada = await this.findSolicitud(id)
            await CnxMongoDB.db.collection("solicitudes").deleteOne({_id: new ObjectId(id)}) 
            return solicitudEliminada
        }
        catch(error) {
            console.log(error)
            return {error: error.message}
        }
    }
}

export default SolicitudesMongoDB