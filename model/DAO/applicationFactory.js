import ApplicationsMongoDB from './applicationsMongoDB.js'
class ApplicationsFactoryDAO {
    static get(type) {
        switch(type) {
            case 'MONGO' :
                console.log("**** Persistiendo Solicitudes  en MongoDB ****");
                return new ApplicationsMongoDB()
            default :
            console.log("**** Persistiendo Solicitudes en Default (MongoDB) ****");
                return new ApplicationsMongoDB()
        }
    }
}
export default ApplicationsFactoryDAO