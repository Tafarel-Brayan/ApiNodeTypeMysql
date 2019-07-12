import * as mysql from 'mysql';

export class Connection{

    teste = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: '',
        database: 'nodemysql'
    });

    dbacesso = mysql.createConnection({
        host: '147.1.0.83',
        port: 3306,
        user: 'root',
        password: 'my@2k15',
        database: 'dbacesso'

    });

}
