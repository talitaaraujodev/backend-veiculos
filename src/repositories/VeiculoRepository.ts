import { VeiculoDTO } from "../dto/VeiculoDto";
import { Veiculo } from "../entities/VeiculoEntity";
import { IVeiculoRepository } from "./IVeiculoRepository";
import database from "../database/models/index";

class VeiculoRepository implements IVeiculoRepository {
  async create(veiculo: VeiculoDTO): Promise<Veiculo> {
    return await database.Veiculos.create(veiculo);
  }

  async findAll(): Promise<Veiculo[]> {
    return await database.Veiculos.findAll();
  }

  async findAllManufacturer(): Promise<any> {
    return await database.Veiculo.findAll({
      select: {
        marca: true,
      },
    });
  }

  async findOne(id: number): Promise<Veiculo | any> {
    return await database.Veiculo.findOne({ where: { id } });
  }

  async findByUnsold(): Promise<Veiculo[]> {
    const veiculos = database.Veiculo.findMany({ where: { vendido: false } });
    return veiculos;
  }

  async findByManufacturer(marca: string): Promise<Veiculo[]> {
    const veiculos = await database.veiculo.findMany({
      where: { OR: [{ marca }] },
    });
    return veiculos;
  }

  async findByDecade(ano: number): Promise<Veiculo[]> {
    return await database.Veiculo.findMany({ where: { ano } });
  }

  async findByLastVeiculos(): Promise<Veiculo[]> {
    return await database.Veiculo.findMany({
      take: 10,
      orderBy: { createdAt: "desc" },
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
