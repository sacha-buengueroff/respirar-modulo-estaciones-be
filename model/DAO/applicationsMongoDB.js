import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'
class ApplicationsMongoDB {
    findApplication = async id => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            let application = await CnxMongoDB.db.collection("solicitudes").findOne({ _id: new ObjectId(id) })
            if (!application) {
                throw new Error("No se encontró solicitud con el id enviado")
            }
            return { message: application, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }
    findApplications = async () => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            let applications = await CnxMongoDB.db.collection('solicitudes').find({}).toArray()
            return { message: applications, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }
    saveApplication = async application => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            await CnxMongoDB.db.collection("solicitudes").insertOne(application)
            return { message: application, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }
    updateApplication = async (application, id) => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            await CnxMongoDB.db.collection('solicitudes').updateOne(
                { _id: ObjectId(id) },
                { $set: application }
            )
            let applicationUpdate = await this.findApplication(id)
            return { message: applicationUpdate, status: 200 }
        }
        catch (error) {
            return { message: error.message, status: 400 }
        }
    }
    deleteApplication = async id => {
        try {
            if (!CnxMongoDB.connection) throw new Error("No hay conexión a la base de datos")
            let applicationDelete = await this.findApplication(id)
            await CnxMongoDB.db.collection("solicitudes").deleteOne({ _id: new ObjectId(id) })
            return applicationDelete
        }
        catch (error) {
            console.log(error)
            return { message: error.message, status: 400 }
        }
    }
}
export default ApplicationsMongoDB