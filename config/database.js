const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configuração da conexão com fallback para localhost
const sequelize = new Sequelize(
  process.env.MYSQLDATABASE || "projeto_PI", // Nome do banco
  process.env.MYSQLUSER || "root", // Usuário
  process.env.MYSQLPASSWORD || "", // Senha
  {
    host: process.env.MYSQLHOST || "localhost", // Host
    port: process.env.MYSQLPORT || 3306, // Porta
    dialect: "mysql",
  }
);

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((err) => console.error("Erro ao conectar: ", err));

module.exports = sequelize;
