import VeiculoController from "../controllers/VeiculoController";
import { Router } from "express";
const veiculosRouter = Router();

veiculosRouter.get("/veiculos", VeiculoController.findListing);
veiculosRouter.get("/veiculos/:id", VeiculoController.finOne);
veiculosRouter.get("/veiculos/teste", VeiculoController.findByUltimosVeiculos);
veiculosRouter.post("/veiculos", VeiculoController.create);
veiculosRouter.put("/veiculos/:id", VeiculoController.update);
veiculosRouter.delete("/veiculos/:id", VeiculoController.delete);
module.exports = veiculosRouter;
