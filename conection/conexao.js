const mysql = require("mysql2");
const env = require("dotenv");
env.config()

const createConnecte = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
});

createConnecte.connect((error) => {
  if (error) {
    console.log(`Ouve um erro na conexão, ${error}`);
  }
});

module.exports = createConnecte;
