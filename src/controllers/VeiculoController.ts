import { Request, Response } from "express";
import veiculoService from "../services/VeiculoService";
import { Const } from "../util/const";

class VeiculoController {
  async create(req: Request, res: Response): Promise<Response | any> {
    try {
      const veiculo = await veiculoService.create(req.body);
      return res.status(Const.httpStatus.CREATED).json({
        message: "Veiculo criado com sucesso.",
        veiculo,
      });
    } catch (error: any) {
      res.status(error.status || Const.httpStatus.ERROR_SERVER).json(error);
    }
  }

  async findListing(req: Request, res: Response): Promise<Response> {
    const { marca, ano, vendido }: any = req.query;

    const getVeiculos = await veiculoService.findListing(marca, ano, vendido);
    try {
      return res.status(Const.httpStatus.OK).json(getVeiculos);
    } catch (error: any) {
      return res.status(500).json(error);
    }
  }

  async finOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const veiculo = await veiculoService.findOne(id);
      return res.status(Const.httpStatus.OK).json(veiculo);
    } catch (error: any) {
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
    }
  }

  async findByUltimosVeiculos(req: Request, res: Response): Promise<Response> {
    console.log(req);
    const getLastVeiculos = await veiculoService.findByUltimosVeiculos();
    try {
      return res.status(Const.httpStatus.OK).json(getLastVeiculos);
    } catch (error: any) {
      console.log(error);
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      await veiculoService.update(id, req.body);
      return res.json({
        message: "Veiculo atualizado com sucesso",
      });
    } catch (error: any) {
      console.log(error);
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await veiculoService.delete(parseInt(id));
      return res.status(Const.httpStatus.OK).json({
        message: "Veiculo deletado com sucesso.",
      });
    } catch (error: any) {
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
    }
  }
}
export default new VeiculoController();
