import { VeiculoDTO } from "../dto/VeiculoDto";
import { Veiculo } from "../entities/VeiculoEntity";
import { IVeiculoRepository } from "./IVeiculoRepository";
import database from "../database/models/index";
import { Op } from "sequelize";
class VeiculoRepository implements IVeiculoRepository {
  async create(veiculo: VeiculoDTO): Promise<Veiculo> {
    return await database.Veiculos.create(veiculo);
  }

  async findAll(): Promise<Veiculo[]> {
    return await database.Veiculos.findAll();
  }

  async findOne(id: number): Promise<Veiculo | any> {
    return await database.Veiculos.findOne({ where: { id } });
  }

  async findByNotVendido(vendido: boolean): Promise<Veiculo[]> {
    return await database.Veiculos.findAll({ where: { vendido } });
  }

  async findByMarca(marca: string): Promise<Veiculo[]> {
    return await database.Veiculos.findAll({
      where: { marca },
    });
  }

  async findByAno(ano: number): Promise<Veiculo[]> {
    return await database.Veiculos.findAll({ where: { ano } });
  }

  async findByUltimosVeiculos(): Promise<Veiculo[]> {
    return await database.Veiculos.findAll({
      where: {
        createdAt: {
          [Op.lt]: new Date(),
          [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000),
        },
        id: 10,
      },
    });
  }

  async update(id: number, veiculo: VeiculoDTO): Promise<Veiculo> {
    return await database.Veiculos.update(veiculo, {
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<Veiculo> {
    return await database.Veiculos.destroy({ where: { id } });
  }
}
export default new VeiculoRepository();
