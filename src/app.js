import express from "express";
import conectaBaseDeDatos from "./config/conexionDB.js";
import libroModel from "./models/libros.js";
const app = express();
app.use(express.json());

const db = await conectaBaseDeDatos();

db.on('error',(error) => {
    console.log('Error en la conexión',error);
});

db.once('open', () => {
    console.log("Conexión a la base de datos exitosa");
});

app.get('/',(req,res) => {
    res.status(200).send('Formacion Node + Express + MongoDB con servidor Express');
});

app.get('/libros',async (req,res) => {
    const listaLibros = await libroModel.find({});
    res.status(200).json(listaLibros);
});

app.get('/libros/:id',(req,res) => {
    const index = buscaLibro(Number(req.params.id));
    res.status(200).json(librosActuales[index]);
});

//Crear un libro
app.post('/libros',(req,res) => {
    librosActuales.push(req.body);
    res.status(201).send('Libro registrado correctamente...');
});

app.put('/libros/:id',(req,res) => {
    const index = buscaLibro(Number(req.params.id));
    librosActuales[index].titulo = req.body.titulo;
    res.status(200).json(librosActuales);
});

app.delete('/libros/:id', (req, res) => {
    const index = buscaLibro(Number(req.params.id));
    librosActuales.splice(index, 1);
    res.status(200).send('Libro borrado con éxito');
});


export default app;

