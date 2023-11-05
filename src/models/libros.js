import mongoose from "mongoose";
import { autorSchema } from "./autor.js";

const libroSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    titulo: {
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
    },
    autor: autorSchema,
  },
  { versionKey: false }
);

const libroModel = mongoose.model("libros", libroSchema);

export default libroModel;
