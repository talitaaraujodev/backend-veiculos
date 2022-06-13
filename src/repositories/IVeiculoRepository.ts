import { VeiculoDTO } from "../dto/VeiculoDto";
import { Veiculo } from "../entities/VeiculoEntity";

interface IVeiculoRepository {
  create: (veiculo: VeiculoDTO) => Promise<Veiculo>;
  findAll: () => Promise<Veiculo[]>;
  findAllManufacturer: () => Promise<any>;
  findOne: (id: number) => Promise<any>;
  findByUnsold: () => Promise<Veiculo[]>;
  findByManufacturer: (marca: string) => Promise<Veiculo[]>;
  findByDecade: (ano: number) => Promise<Veiculo[]>;
  findByLastVeiculos: () => Promise<Veiculo[]>;
  update: (id: number, veiculo: VeiculoDTO) => Promise<Veiculo>;
  delete: (id: number) => Promise<Veiculo>;
}
export { IVeiculoRepository };
