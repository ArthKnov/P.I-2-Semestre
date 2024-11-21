const { Sequelize } = require("sequelize");
require("dotenv").config();

// Configuração da conexão com o banco de dados no Railway
const sequelize = new Sequelize(
  process.env.MYSQLDATABASE || "railway", // Nome do banco de dados
  process.env.MYSQLUSER || "root", // Usuário
  process.env.MYSQLPASSWORD || "", // Senha
  {
    host: process.env.MYSQLHOST || "localhost", // Host (Agora usando a variável do Railway)
    port: process.env.MYSQLPORT || 3306, // Porta
    dialect: "mysql", // Dialeto MySQL
  }
);

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log("Conectado ao banco de dados"))
  .catch((err) => console.error("Erro ao conectar: ", err));

module.exports = sequelize;
