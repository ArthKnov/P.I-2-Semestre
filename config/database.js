const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME || "projeto_PI", 
                                process.env.DB_USER || "root", 
                                process.env.DB_PASS || "", {
    host   : "localhost",
    dialect: "mysql"
});

  // Testar a conexão com o banco de dados
sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.log('Erro: ' + err));

module.exports = sequelize;
