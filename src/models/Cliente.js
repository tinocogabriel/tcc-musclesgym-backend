const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        id_cliente: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: DataTypes.STRING,
        rg: DataTypes.INTEGER,
        cpf: DataTypes.INTEGER,
        endereco: DataTypes.STRING,
        data_criacao: DataTypes.DATE,
        data_alteracao: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: "cliente",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Perfil, { foreignKey: "id_perfil", as: "perfil" });
    this.belongsTo(models.Acesso, { foreignKey: "id_acesso", as: "acesso" });
  }
}

module.exports = Cliente;
