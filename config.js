import dotenv from 'dotenv'

dotenv.config()

const PORT = 8081
const STRCNX = process.env.STRCNX || 'mongodb://db-mongo:27017'
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MONGO'
const BASE = process.env.BASE || 'local'
const MAIL = process.env.MAIL
const MAIL_PASS = process.env.MAIL_PASS
const ORION_URL = 'http://orion:1026/'
const AGENT_URL = 'http://iot-agent-ul:4041/iot'
const AGENT_URL_NORTH = 'http://iot-agent-ul:7897/iot/d'
const FIWARE_SERVICE = 'openiot'
const FIWARE_SERVICETYPE = '/'
const ENTITY_TYPE = 'AirQualityObserved'
const RESOURCE = '/iot/d'
const APIKEY = process.env.APIKEY || '4jggokgpepnvsb2uv4s40d59ov'
const CONTENT_TYPE = 'application/json'
const CONTENT_TYPE_DATA = 'text/plain'

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE,
    MAIL,
    MAIL_PASS,
    ORION_URL,
    AGENT_URL,
    AGENT_URL_NORTH,
    FIWARE_SERVICE,
    FIWARE_SERVICETYPE,
    ENTITY_TYPE,
    RESOURCE,
    APIKEY,
    CONTENT_TYPE,
    CONTENT_TYPE_DATA
}
