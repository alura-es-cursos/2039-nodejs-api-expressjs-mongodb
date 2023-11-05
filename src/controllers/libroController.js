import { autorModel } from "../models/autor.js";
import libroModel from "../models/libros.js";

class libroController {
  async listaLibros(req, res) {
    try {
      const listaLibros = await libroModel.find({});
      res.status(200).json(listaLibros);
    } catch (e) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible consultar los libros`,
      });
    }
  }

  async listaLibroPorId(req, res) {
    try {
      const id = req.params.id;
      const libro = await libroModel.findById(id);
      res.status(200).json(libro);
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible consultar el libro con id ${id}`,
      });
    }
  }

  async creaLibro(req, res) {
    try {
      const dataLibro = req.body;
      const autorLibro = await autorModel.findById(dataLibro.autor);
      const libroCompleto = { ...dataLibro, autor: { ...autorLibro._doc } };
      const nuevoLibro = await libroModel.create(libroCompleto);
      res.status(201).json({ result: true, nuevoLibro: nuevoLibro });
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible hacer el registro del libro`,
      });
    }
  }

  async actualizaLibroPorId(req, res) {
    try {
      const id = req.params.id;
      await libroModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({ result: true, mensaje: "Libro actualizado" });
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible actualizar el libro con id ${id}`,
      });
    }
  }

  async eliminaLibroPorId(req, res) {
    try {
      const id = req.params.id;
      await libroModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ result: true, mensaje: "Libro borrado con éxito" });
    } catch (error) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible eliminar el libro con id ${id}`,
      });
    }
  }

  async listaLibrosParametros(req, res) {
    try {
      const { editorial } = req.query;
      console.log(editorial);
      const listaLibros = await libroModel.find({ editorial });
      res.status(200).json(listaLibros);
    } catch (e) {
      res.status(500).json({
        error: `Error: ${error.message} - No fue posible consultar los libros por parámetro`,
      });
    }
  }
}

export default libroController = new libroController();
