const express = require("express");
const planetsController = require("./planets.controller");

const { getAllPlanets } = planetsController;

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
