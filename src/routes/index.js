import express from "express";
import libroRoutes from "./libroRoutes.js";
import autorRoutes from "./autorRoutes.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res
      .status(200)
      .send("Formacion Node + Express + MongoDB con servidor Express");
  });

  app.use(express.json(), libroRoutes, autorRoutes);
};

export default routes;
