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

  async findAll(req: Request, res: Response): Promise<Response> {
    const getVeiculos = await veiculoService.findAll();
    try {
      return res.status(Const.httpStatus.OK).json(getVeiculos);
    } catch (error: any) {
      return res.status(500).json(error);
    }
  }

  async findAllManufacturer(req: Request, res: Response): Promise<Response> {
    const getManufacturers = await veiculoService.findAllManufacturer();
    try {
      return res.status(Const.httpStatus.OK).json(getManufacturers);
    } catch (error: any) {
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
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

  async findByUnsold(req: Request, res: Response): Promise<Response> {
    const veiculosUnsold = await veiculoService.findByUnsold();
    try {
      return res.status(Const.httpStatus.OK).json(veiculosUnsold);
    } catch (error: any) {
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
    }
  }

  async findByManufacturer(req: Request, res: Response): Promise<Response> {
    try {
      const { marca } = req.params;
      console.log("marca aqui", marca);
      const veiculosByManufacturer = await veiculoService.findByManufacturer(
        marca
      );
      return res.status(Const.httpStatus.OK).json(veiculosByManufacturer);
    } catch (error: any) {
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
    }
  }

  async findByDecade(req: Request, res: Response): Promise<Response> {
    try {
      const ano = parseInt(req.params.ano);
      const veiculosByDecade = await veiculoService.findByDecade(ano);
      return res.status(Const.httpStatus.OK).json(veiculosByDecade);
    } catch (error: any) {
      return res
        .status(error.status || Const.httpStatus.ERROR_SERVER)
        .json(error);
    }
  }

  async findByLastVeiculos(req: Request, res: Response): Promise<Response> {
    const getLastVeiculos = await veiculoService.findByLastVeiculos();
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
      const veiculo = await veiculoService.update(id, req.body);
      return res.json({
        message: "Veiculo atualizado com sucesso",
        veiculo,
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
      const id = parseInt(req.params.id);
      await veiculoService.delete(id);
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
