const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Band extends Model {}

Band.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    band_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    band_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    show_ready: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "band",
  }
);

module.exports = Band;
