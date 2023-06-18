import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'RespirAR Módulo EStaciones API',
    },
    host: 'localhost:8080',
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
        PostEstacionError: {
            "ErrorName": "El parametro nombre de usuario se encuentra vacio o nulo",
            "ErrorCoordinates": "El parametro coordenadas es invalido",
            "ErrorAddStreet": "El parametro calle se encuentra vacio o nulo",
            "ErrorAddLocaly": "El parametro localidad se encuentra vacio o nulo",
            "ErrorAddRegion": "El parametro region se encuentra vacio o nulo",
            "ErrorExternal": "El parametro external vacio o no corresponde el tipo",
            "ErrorEmail": "El parametro email vacio o invalido",
            "ErrorParameters": "El formulario cuenta con un campo extra"
        },
    }

};

const outputFile = './swagger_output.json'
const endpointsFiles = ['./server.js']

swaggerAutogen(outputFile, endpointsFiles, doc)