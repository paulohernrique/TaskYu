import { createConnection } from 'mysql';

const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'taskyu'
}

const conexao = createConnection(dbConfig);

export default conexao;
