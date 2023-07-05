// TODO: Crear modelo de datos de Reserva
"use strict";

const { DataTypes, sequelize } = require("../database/database");

const Reserva = sequelize.define(
  "Reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    flightCode: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: "Reserva",
    tableName: "reservas",
    underscored: true,
  }
);

module.exports = Reserva;
