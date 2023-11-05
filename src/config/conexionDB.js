import mongoose from "mongoose";

async function conectaBaseDeDatos() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectaBaseDeDatos;

