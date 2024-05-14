const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'taskyu'
}

const conexao = mysql.createConnection(dbConfig);

module.exports = conexao;
