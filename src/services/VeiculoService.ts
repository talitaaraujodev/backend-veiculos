import { ResponseError } from "../errors/ResponseError";
import { Const } from "../util/const";
import validate from "../validators/validate";
import veiculoValidator from "../validators/vaiculoValidator";
import { Veiculo } from "../entities/VeiculoEntity";
import { VeiculoDTO } from "../dto/VeiculoDto";
import { IVeiculoRepository } from "../repositories/IVeiculoRepository";
import VeiculoRepository from "../repositories/VeiculoRepository";

class VeiculoService {
  constructor(private veiculoRepository: IVeiculoRepository) {}

  async create(veiculo: VeiculoDTO): Promise<Veiculo> {
    const data = await validate(veiculoValidator, veiculo);

    if (data.errors) {
      throw new ResponseError(data.errors, Const.httpStatus.BAD_REQUEST);
    }
    const veiculoCreated = await this.veiculoRepository.create(veiculo);
    return veiculoCreated;
  }

  async findListing(
    marca?: string,
    ano?: number,
    vendido?: boolean
  ): Promise<Veiculo[]> {
    if (marca) {
      return await this.veiculoRepository.findByMarca(marca);
    } else if (ano) {
      return await this.veiculoRepository.findByAno(ano);
    } else if (vendido) {
      return await this.veiculoRepository.findByNotVendido(vendido);
    }
    return await this.veiculoRepository.findAll();
  }

  async findOne(id: number): Promise<Veiculo> {
    const veiculo = await this.veiculoRepository.findOne(id);
    if (!veiculo) {
      throw new ResponseError(
        "Veiculo não existe",
        Const.httpStatus.BAD_REQUEST
      );
    }
    return veiculo;
  }

  async findByUltimosVeiculos(): Promise<Veiculo[]> {
    return await this.veiculoRepository.findByUltimosVeiculos();
  }

  async update(id: number, veiculo: VeiculoDTO): Promise<Veiculo> {
    const veiculoExists = await this.veiculoRepository.findOne(id);
    const body = veiculo;
    const data = await validate(veiculoValidator, body);
    if (data.errors) {
      throw new ResponseError(data.errors, Const.httpStatus.BAD_REQUEST);
    } else if (!veiculoExists) {
      throw new ResponseError(
        "Veiculo não existe",
        Const.httpStatus.BAD_REQUEST
      );
    }
    return await this.veiculoRepository.update(id, veiculo);
  }

  async delete(id: number): Promise<Veiculo> {
    const veiculoExists = await this.veiculoRepository.findOne(id);
    if (!veiculoExists) {
      throw new ResponseError(
        "Veiculo não existe",
        Const.httpStatus.BAD_REQUEST
      );
    }
    return await this.veiculoRepository.delete(id);
  }
}
export default new VeiculoService(VeiculoRepository);
