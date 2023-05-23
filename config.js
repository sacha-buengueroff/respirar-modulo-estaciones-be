import dotenv from 'dotenv'

dotenv.config()

const PORT = 8080
const STRCNX = process.env.STRCNX || 'mongodb://localhost:27017'
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MONGO'
const BASE = process.env.BASE || 'local'

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE
}
