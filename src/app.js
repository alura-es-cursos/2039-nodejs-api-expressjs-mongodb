import express from "express";
const app = express();
app.use(express.json());

const librosActuales = [
    {
        id: 1,
        titulo:"El señor de los anillos",
    },
    {
        id: 2,
        titulo:"Don Quijote",
    },
];

const buscaLibro = (id) => {
    return librosActuales.findIndex((libro) => libro.id === id);
}

app.get('/',(req,res) => {
    res.status(200).send('Formacion Node + Express + MongoDB con servidor Express');
});

app.get('/libros',(req,res) => {
    res.status(200).json(librosActuales);
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