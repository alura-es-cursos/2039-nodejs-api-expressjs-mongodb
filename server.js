import http from 'http';

const rutas = {
    '/': 'Formacion Node + Express + MongoDB',
    '/autores' : 'Estos son los autores',
    '/libros' : 'Estos son los libros',
    '/categorias' : '<strong>Estas son las categorias</strong>'
}

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(rutas[req.url]);
});

server.listen(3000, () => {
    console.log('Servidor iniciado');
});