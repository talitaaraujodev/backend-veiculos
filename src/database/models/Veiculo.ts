"use strict";

import { Model } from "sequelize";

interface VeiculoAttributes {
  id: number;
  veiculo: string;
  marca: string;
  ano: number;
  descricao: string;
  vendido: boolean;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Veiculos extends Model<VeiculoAttributes> implements VeiculoAttributes {
    id!: number;
    veiculo!: string;
    marca!: string;
    ano!: number;
    descricao!: string;
    vendido!: boolean;
    createdAt!: Date;
    updatedAt!: Date;
    static associate(models: any) {}
  }
  Veiculos.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      veiculo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      vendido: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Veiculos",
    }
  );
  return Veiculos;
};
