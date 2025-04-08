const express = require('express');
const FuncionariosController = require('../Controller/FuncionariosController');
const FuncionariosRotas = express.Router();
const funcionariosController = new FuncionariosController()

FuncionariosRotas.use(express.json());

FuncionariosRotas.get("/funcionarios", funcionariosController.list)

FuncionariosRotas.post("/funcionarios", funcionariosController.create)

FuncionariosRotas.put("/funcionarios/:id", funcionariosController.update)

FuncionariosRotas.delete("/funcionarios/:id", funcionariosController.delete)


module.exports = FuncionariosRotas