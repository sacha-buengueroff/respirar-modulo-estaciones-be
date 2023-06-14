import axios from 'axios'

class CbHttp {

    constructor() {
        this.url = "http://orion:1026/"
        this.config = {
            headers: {
                "fiware-service": "openiot",
                "fiware-servicepath": "/"
            }
        }
    }

    async getCbStatus() {
        try {
            const response = await axios.get(this.url + "version")
            return response.status
        }
        catch (e) {
            throw new Error('Context Broker no disponible');
        }
    }

    getEstaciones = async (id) => {
        try {
            const response = id ? await axios.get(this.url + "v2/entities/" + id, this.config) : await axios.get(this.url + "v2/entities/", this.config)
            return {
                status: response.status,
                message: response.data
            }
        } catch (error) {
            return {
                status: error.response.status,
                message: error.response.data.name
            }
        }

    }

    suspenderEstacion = async (id) => {
        let body = {
            "enable": {
                "value": false,
                "type": "Boolean"
            }
        }
        await axios.patch(this.url + "v2/entities/" + id + "/attrs/", body, this.config)
    }

    getEstacionesPorUsuario = async (user) => {
        this.config.params = {
            q: "ownerId=='urn:ngsi-ld:" + user + "'",
            options: "keyValues",
            type: "AirQualityObserved"
        }
        try {
            let response = await axios.get(this.url + "v2/entities/", this.config)
            return {
                status: response.status,
                message: response.data
            }
        } catch (error) {
            return {
                status: error.status,
                message: "No se encontraron estaciones con el usuario " + user
            }
        }
    }


    getEstacionesCiudad = async () => {
        let respuesta = {}
        this.config.params = {
            q: "dataProvider=='Respirar'",
            options: "keyValues",
            type: "AirQualityObserved"
        }

        try {
            let llamada = await axios.get(this.url + "v2/entities/", this.config)
            respuesta.status = llamada.status
            respuesta.message = llamada.data
        } catch (error) {
            respuesta.status = error.response.status
            respuesta.message = error.response.data.orionError.details
        }
        return respuesta
    }

    async checkSuscripcionDraco() {
        let llamada
        try{
            llamada = await axios.get(this.url + "v2/subscriptions/", this.config)
        }catch{
            throw new Error('Error al intentar obtener suscripción de Draco mediante Orion');
        }
        
        // Se fija si el array devuelto contiene al menos una subscripción
        if(llamada.data.length > 0){
            console.log("Suscripción previamente creada")
        }else{
            await this.crearSuscripcionDraco()
        }
    }

    async crearSuscripcionDraco(){
        const body = {
            "description": "Suscripción a cambios en todas las entidades y campos",
            "subject": {
                "entities": [
                    {
                        "idPattern": ".*",
                        "type": "AirQualityObserved"
                    }
                ],
                "condition": {
                    "attrs": []
                }
            },
            "notification": {
                "http": {
                    "url": "http://draco:5050/v2/notify"
                },
                "attrs": []
            },
            "throttling": 0
        }

        try{
            await axios.post(this.url + "v2/subscriptions/",body, this.config)
           console.log("Suscripción a Draco creada")
        }catch(e){
            throw new Error('Error al intentar crear suscripción de Draco mediante Orion');
        }

    }


}

export default CbHttp