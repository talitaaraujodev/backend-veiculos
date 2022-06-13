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

  async findAll(): Promise<Veiculo[]> {
    return await this.veiculoRepository.findAll();
  }

  async findAllManufacturer(): Promise<any> {
    return await this.veiculoRepository.findAllManufacturer();
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

  async findByUnsold(): Promise<Veiculo[]> {
    return await this.veiculoRepository.findByUnsold();
  }

  async findByManufacturer(marca: string): Promise<Veiculo[]> {
    console.log("marca aqui", marca);
    return await this.veiculoRepository.findByManufacturer(marca);
  }

  async findByDecade(ano: number): Promise<Veiculo[]> {
    return this.veiculoRepository.findByDecade(ano);
  }

  async findByLastVeiculos(): Promise<Veiculo[]> {
    const teste = this.veiculoRepository.findByLastVeiculos();
    console.log(teste);
    return teste;
  }

  async update(id: number, veiculo: VeiculoDTO): Promise<Veiculo> {
    const veiculoExists = await this.veiculoRepository.findOne(id);
    const body = veiculo;
    const data = await validate(veiculoValidator, body);
    console.log("data", data);
    if (data.errors) {
      throw new ResponseError(data.errors, Const.httpStatus.BAD_REQUEST);
    } else if (!veiculoExists) {
      throw new ResponseError(
        "Veiculo não existe",
        Const.httpStatus.BAD_REQUEST
      );
    }
    return await this.veiculoRepository.update(id, data);
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
