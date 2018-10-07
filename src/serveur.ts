import * as express from 'express';
import * as session from 'express-session';

/**
 * SERVEUR SPARTA
 */
export class Serveur {

    /**
     * Port TCP d'écoute
     */
    private nodePort: number;

    /**
     * Instance EXPRESSJS
     */
    private app: express.Application = express();

    /**
     * Serveur SPARTA
     * @param port Port TCP
     */
    constructor(port: number) {
        console.log('*');
        this.nodePort = port;
        // this.app = express();
    }

    /**
     * Affichage du nom du serveur
     */
    private displayServeurName() : void {
        // http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=Serveur%20SPARTA
        console.log('  ███████╗███████╗██████╗ ██╗   ██╗███████╗██╗   ██╗██████╗  ');
        console.log('  ██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██║   ██║██╔══██╗ ');
        console.log('  ███████╗█████╗  ██████╔╝██║   ██║█████╗  ██║   ██║██████╔╝ ');
        console.log('  ╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██║   ██║██╔══██╗ ');
        console.log('  ███████║███████╗██║  ██║ ╚████╔╝ ███████╗╚██████╔╝██║  ██║ ');
        console.log('  ╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ');
        console.log('');
        console.log('      ███████╗██████╗  █████╗ ██████╗ ████████╗ █████╗ ');
        console.log('      ██╔════╝██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗');
        console.log('      ███████╗██████╔╝███████║██████╔╝   ██║   ███████║');
        console.log('      ╚════██║██╔═══╝ ██╔══██║██╔══██╗   ██║   ██╔══██║');
        console.log('      ███████║██║     ██║  ██║██║  ██║   ██║   ██║  ██║');
        console.log('      ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝');
        console.log('');
        console.log('');
    }

    /**
     * Initialisation du système de gestion des sessions
     */
    private initSession() : void {
        console.log('Appel de initSession');

        //var hour = 3600000;
        //req.session.cookie.expires = new Date(Date.now() + hour);
        //req.session.cookie.maxAge = hour;


        this.app.use(session({
            secret: 'SPARTA2019',
            resave: true,
            saveUninitialized: false,
            cookie: { secure: true, maxAge:60000 }
          }))
        
      
    }

    /**
     * Lancement du serveur web
     */
    public runExpressSrv() : void {

        this.displayServeurName();

        this.initSession();

        this.app.get('/', function (req, res) {
            console.log("URL : "+req.originalUrl);
            console.log("Path : "+req.path);
            console.log("SessionID : "+req.session.id);
            console.log(req.session.cookie.maxAge);
            
            res.json({ srv: '** SERVEUR SPARTA **' });
            res.end;
          })



        this.app.listen(this.nodePort, () => {           
            // Success callback
            console.log("Le serveur écoute sur le port : "+this.nodePort);
        });
    }

}
