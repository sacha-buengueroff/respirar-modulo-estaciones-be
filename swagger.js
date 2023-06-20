import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'RespirAR Módulo EStaciones API',
    },
    host: 'localhost:8081',
    schemes: ['http'],
    definitions: {
        Estacion: {
            "id": "urn:ngsi-ld:AirQualityObserved:1",
            "type": "AirQualityObserved",
            "TimeInstant": {
                "type": "DateTime",
                "value": "2023-06-17T14:47:05.634Z",
            },
            "address": {
                "type": "Address",
                "value": {
                    "address": {
                        "streetAddress": "corrientes",
                        "addressLocality": "CABA",
                        "addressRegion": "PAMPA"
                    }
                },
            },
            "dataProvider": {
                "type": "String",
                "value": "Respirar",
            },
            "enable": {
                "type": "Boolean",
                "value": true,
            },
            "location": {
                "type": "Point",
                "value": {
                    "coordinates": [
                        -38.6486495,
                        -163.369692
                    ]
                },
            },
            "ownerId": {
                "type": "String",
                "value": "urn:ngsi-ld:name",
            },
            "pm1": {
                "type": "Float",
                "value": null,
            },
            "pm10": {
                "type": "Float",
                "value": null,
            },
            "pm25": {
                "type": "Float",
                "value": null,
            },
            "reliability": {
                "type": "Float",
                "value": null,
            },
            "temperature": {
                "type": "Float",
                "value": null,
            }
        },
        PostEstacion: {
            "id": "urn:ngsi-ld:AirQualityObserved:1",
            "mailId": "AirQualityObserved1"
        },
        Solicitud: {
            "name": "name",
            "coordinates": [
                -38.6486495,
                -163.369692
            ],
            "addStreet": "corrientes",
            "addLocaly": "CABA",
            "addRegion": "PAMPA",
            "external": true,
            "email": "ciudades@hotmail.com",
            "_id": "649098c4f1fc4637c0a206b2"
        },
        bodyPost:{
            "name": "name" , 
            "coordinates": [
                            -29.233012401017962,
                            136.7063500973975
                            ],
            "addStreet":"Street", 
            "addLocaly": "Localy", 
            "addRegion":"Region" , 
            "external": true,
            "email" : "ciudades@hotmail.com"  
        }
    }

};

const outputFile = './swagger_output.json'
const endpointsFiles = ['./server.js']

swaggerAutogen(outputFile, endpointsFiles, doc)