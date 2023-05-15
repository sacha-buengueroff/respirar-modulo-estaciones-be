import Server from './server.js'
import config from './config.js'

const PORT = process.env.PORT || config.PORT
new Server(PORT).start()
