import SolicitudesMongoDB from './solicitudesMongoDB.js'

class SolicitudesFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO' :
                console.log("**** Persistiendo Solicitudes  en MongoDB ****");
                return new SolicitudesMongoDB()
            default :
            console.log("**** Persistiendo Solicitudes en Default (MongoDB) ****");
                return new SolicitudesMongoDB()
        }
    }
}

export default SolicitudesFactoryDAO