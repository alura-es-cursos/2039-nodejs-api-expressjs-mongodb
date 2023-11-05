import express from "express";
import conectaBaseDeDatos from "./config/conexionDB.js";
import routes from './routes/index.js';

const app = express();

routes(app);

const db = await conectaBaseDeDatos();

db.on('error',(error) => {
    console.log('Error en la conexión',error);
});

db.once('open', () => {
    console.log("Conexión a la base de datos exitosa");
});

export default app;

