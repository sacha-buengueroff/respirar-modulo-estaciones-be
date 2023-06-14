import dotenv from 'dotenv'

dotenv.config()

const PORT = 8081
const STRCNX = process.env.STRCNX || 'mongodb://localhost:27017'
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MONGO'
const BASE = process.env.BASE || 'local'
const MAIL = process.env.MAIL
const MAIL_PASS = process.env.MAIL_PASS

export default {
    PORT,
    STRCNX,
    MODO_PERSISTENCIA,
    BASE,
    MAIL,
    MAIL_PASS
}
