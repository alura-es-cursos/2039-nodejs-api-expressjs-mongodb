import mongoose from "mongoose";

const libroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    titulo:{
        type: String,
        required: true,
    },
    editorial: {
        type: String,
    },
    precio: {
        type: Number,
    },
    paginas: {
        type: Number,
    }
}, {versionKey: false});

const libroModel = mongoose.model('libros',libroSchema);

export default libroModel;