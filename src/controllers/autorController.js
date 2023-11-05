import { autorModel } from "../models/autor.js";

class autorController {
  async listaAutores(req, res) {
    const listaAutores = await autorModel.find({});
    res.status(200).json(listaAutores);
  }

  async listaAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autor = await autorModel.findById(id);
      res.status(200).json(autor);
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible consultar el autor con id ${id}`,
      });
    }
  }

  async creaAutor(req, res) {
    try {
      const nuevoAutor = await autorModel.create(req.body);
      res.status(201).json({ result: true, nuevoAutor: nuevoAutor });
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible hacer el registro del autor`,
      });
    }
  }

  async actualizaAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autorModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ result: true, mensaje: "Autor actualizado" });
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible actualizar el autor con id ${id}`,
      });
    }
  }

  async eliminaAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autorModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ result: true, mensaje: "Autor borrado con éxito" });
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible eliminar el autor con id ${id}`,
      });
    }
  }
}

export default autorController = new autorController();
