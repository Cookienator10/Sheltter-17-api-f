import { createPool } from 'mysql2/promise';

export async function connect() {

   const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'LixCh20214',
        database:'db_sheltter_17_ts',
       connectionLimit: 10
    }); 
    return connection;
}
