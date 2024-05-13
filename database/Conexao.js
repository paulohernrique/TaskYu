const { createConnection } = require('mysql');
const config = require('../config');
const conexao = createConnection(config);

export default conexao;
