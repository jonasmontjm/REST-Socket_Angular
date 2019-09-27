import Server from './classes/server';
import { SERVER_PORT } from './global/enviroment';
import router from './routes/router';
//import bodyParser from 'body-parser';
const bodyParser = require ( 'body-parser');
const cors  = require('cors');



const server = new Server();

//BodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//rutas de servicios
server.app.use(cors({origin:true, credentials:true}));


server.app.use('/',router);

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
})