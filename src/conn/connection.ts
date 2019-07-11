import * as mysql from 'mysql';

export class Connection{

    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: '',
        database: 'nodemysql'
    });

    constructor() {
       this.connection.connect( (err) => {
            if(err){ return console.log(err); }
       }) 
    }

}
