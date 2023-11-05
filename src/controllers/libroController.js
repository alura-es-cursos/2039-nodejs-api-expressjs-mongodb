import libroModel from "../models/libros.js";

class libroController {
    async listaLibros (req,res) {
        const listaLibros = await libroModel.find({});
        res.status(200).json(listaLibros);
    }

    async listaLibroPorId(req,res) {
        try {
            const id = req.params.id;
            const libro = await libroModel.findById(id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json({error: `Error: ${error.message} - No fue posible consult el libro con id ${id}`});
        }
    }

    async creaLibro(req,res) {
        try {
            const nuevoLibro = await libroModel.create(req.body);
            res.status(201).json({result:true, nuevoLibro: nuevoLibro});
        } catch(error) {
            res.status(500).json({error: `Error: ${error.message} - No fue posible hacer el registro del libro`});
        }
        
    }

    async actualizaLibroPorId(req,res) {
        try {
            const id = req.params.id;
            await libroModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({result:true, mensaje: 'Libro actualizado'});
        } catch (error) {
            res.status(500).json({error: `Error: ${error.message} - No fue posible actualizar el libro con id ${id}`});
        }
    }

    async eliminaLibroPorId (req, res) {
        try {
            const id = req.params.id;
            await libroModel.findByIdAndDelete(id);
            res.status(200).json({result:true, mensaje: 'Libro borrado con éxito'});
        } catch (error) {
            res.status(500).json({error: `Error: ${error.message} - No fue posible eliminar el libro con id ${id}`});
        }
        
    }
}

export default libroController = new libroController();