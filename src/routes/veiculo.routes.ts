import VeiculoController from "../controllers/VeiculoController";
import { Router } from "express";
const veiculosRouter = Router();

veiculosRouter.get("/veiculos", VeiculoController.findAll);
veiculosRouter.get("/veiculos/:id", VeiculoController.finOne);
veiculosRouter.get(
  "/veiculos/fabricantes",
  VeiculoController.findAllManufacturer
);
veiculosRouter.get("/veiculos/naoVendidos", VeiculoController.findByUnsold);
veiculosRouter.get("/veiculos/:marca", VeiculoController.findByManufacturer);
veiculosRouter.get("/veiculos/:ano", VeiculoController.findByDecade);
veiculosRouter.get("/veiculos/recentes", VeiculoController.findByLastVeiculos);
veiculosRouter.post("/veiculos", VeiculoController.create);
veiculosRouter.put("/veiculos/:id", VeiculoController.update);
veiculosRouter.delete("/veiculos/:id", VeiculoController.delete);
module.exports = veiculosRouter;
