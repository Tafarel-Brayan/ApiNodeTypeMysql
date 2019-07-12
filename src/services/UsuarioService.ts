import { Connection } from './../conn/connection';

class UsuarioService{

    conn: Connection;
    
    constructor() {
        this.conn = new Connection();
    }
    
    all(){

        return new Promise((resolve, rejects)=>{

            this.conn.dbacesso.connect( (err) => {
                if(err){ return console.log(err); }
            } );

            this.conn.dbacesso.query('SELECT * FROM usuario', (error, results) =>{

                if(error){
                    rejects({
                            error,
                            msg: 'Houve um problema ao listar usuários'
                        })
                    return
                }

                resolve(results);

            });

        });
 
    }

    findById(_id){

        return new Promise( (resolve, rejects) => {

            this.conn.dbacesso.query(`SELECT * FROM usuario WHERE usua_id = ?`, [_id],  (error, results) => {

                if(error){
                    rejects({
                            error,
                            msg: 'Houve um problema ao listar usuário'
                        })
                    return
                }
               
                resolve(results);

            })

        })

    }

}

export default new UsuarioService();