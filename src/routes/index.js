import express from "express";
import libroRoutes from './libroRoutes.js';

const routes = (app) => {
    app.get('/',(req,res) => {
        res.status(200).send('Formacion Node + Express + MongoDB con servidor Express');
    });

    app.use(express.json(), libroRoutes);
}

export default routes;