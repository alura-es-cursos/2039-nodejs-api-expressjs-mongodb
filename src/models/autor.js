import mongoose, { Schema } from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    nombre: {
      type: String,
      required: true,
    },
    nacionalidad: {
      type: String,
    },
  },
  { versionKey: false }
);

const autorModel = mongoose.model("autores", autorSchema);

export { autorModel, autorSchema };
