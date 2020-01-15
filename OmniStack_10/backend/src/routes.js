const { Router } = require('express');

const DevController = require("./controller/DevController");

const routes = Router();

routes.post('/devs', DevController.salvar);

module.exports = routes;