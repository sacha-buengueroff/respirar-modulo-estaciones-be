import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'


class SolicitudesMongoDB {

    findSolicitud = async id => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            let solicitud = await CnxMongoDB.db.collection("solicitudes").findOne({ _id: new ObjectId(id) })
            if (!solicitud) {
                throw new Error("No se encontró solicitud con el id enviado")
            }
            return { message: solicitud, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }

    findSolicitudes = async () => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            let solicitudes = await CnxMongoDB.db.collection('solicitudes').find({}).toArray()
            return { message: solicitudes, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }

    saveSolicitud = async solicitud => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            await CnxMongoDB.db.collection("solicitudes").insertOne(solicitud)
            return { message: solicitud, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }

    updateSolicitud = async (solicitud, id) => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            await CnxMongoDB.db.collection('solicitudes').updateOne(
                { _id: ObjectId(id) },
                { $set: solicitud }
            )
            let solicitudActualizado = await this.findSolicitud(id)
            return { message: solicitudActualizado, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }

    deleteSolicitud = async id => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            let solicitudEliminada = await this.findSolicitud(id)
            await CnxMongoDB.db.collection("solicitudes").deleteOne({ _id: new ObjectId(id) })
            return solicitudEliminada
        }
        catch (error) {
            console.log(error)
            return { message: error.message, status: 400 }
        }
    }
}

export default SolicitudesMongoDB