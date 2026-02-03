import express from 'express';
import colors from 'colors';
import db from './config/db';
import router from './router';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv'
dotenv.config()

// Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log( colors.blue( 'Conexión exitosa a la BD'))
    } catch (error) {
        console.log(colors.red.bold(error))
        console.log( colors.red.bold( 'Hubo un error al conectar a la BD') )
    }
}
connectDB()

// Instancia de express
const server = express()

const corsOptions: CorsOptions = {
    origin: function(origin, callback) {
        console.log(colors.magenta.bold(origin))
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'))
        }
     }
};
server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())
server.use('/api/address', router)

export default server