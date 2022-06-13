import { VeiculoDTO } from "../dto/VeiculoDto";
import { Veiculo } from "../entities/VeiculoEntity";

interface IVeiculoRepository {
  create: (veiculo: VeiculoDTO) => Promise<Veiculo>;
  findAll: () => Promise<Veiculo[]>;
  findOne: (id: number) => Promise<any>;
  findByNotVendido: (vendido: boolean) => Promise<Veiculo[]>;
  findByMarca: (marca: string) => Promise<Veiculo[]>;
  findByAno: (ano: number) => Promise<Veiculo[]>;
  findByUltimosVeiculos: () => Promise<Veiculo[]>;
  update: (id: number, veiculo: VeiculoDTO) => Promise<Veiculo>;
  delete: (id: number) => Promise<Veiculo>;
}
export { IVeiculoRepository };
