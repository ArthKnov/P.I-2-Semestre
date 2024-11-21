const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configuração da conexão com fallback para localhost
const sequelize = new Sequelize(
  process.env.MYSQLDATABASE, // Nome do banco de dados
  process.env.MYSQLUSER, // Usuário
  process.env.MYSQLPASSWORD, // Senha
  {
    host: process.env.MYSQLHOST, // Host (provavelmente o host privado fornecido pelo Railway)
    port: process.env.MYSQLPORT, // Porta
    dialect: "mysql",
  }
);

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((err) => console.error("Erro ao conectar: ", err));

module.exports = sequelize;
