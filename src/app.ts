import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import Auth from './auth/auth';



/* **************** importando as rotas ******************** */
    import IndexRoute from "./routes/index.routes";
    import UsuarioRoute from "./routes/usuario.routes";
/* ********************************************************* */

export class App {
	
	public app: express.Application; 
	public port = process.env.PORT || '3000';

	constructor() {
		this.app = express();
    }
    
    enableCors(){
        const options: cors.CorsOptions = {
            methods: 'GET,POST,PUT,DELETE,OPTIONS',
            origin: '*'
        }

        this.app.use(cors(options));
    }

	listen(){
		this.app.listen(this.port, () => {
            console.log(`Servidor Executando na Porta: ${this.port}`);

            this.middler();
            this.routes();

		})
    }
    
    middler(){
        
        this.enableCors();

        this.app.use( bodyParser.json() );
        this.app.use( bodyParser.urlencoded( {extended:false} ) );
        
    }

	routes(){
        this.app.use(IndexRoute);

        this.app.use(Auth.validate);
        
        this.app.use('/api/v1/usuario', UsuarioRoute);
	}

}