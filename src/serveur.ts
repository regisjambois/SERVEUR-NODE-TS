import * as express from 'express';
import * as session from 'express-session';

/**
 * SERVEUR SPARTA *
 */
export class Serveur {

    private nodePort: number;

    private app: express.Application = express();

    constructor(port: number) {
        console.log('*');
        this.nodePort = port;
        // this.app = express();
    }


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

    public runExpressSrv() : void {

        

        this.app.get('/', function (req, res) {
            console.log("URL : "+req.originalUrl);
            console.log("Path : "+req.path);
            console.log("SessionID : "+req.sessionID);
            res.json({ srv: '** SERVEUR SPARTA **' });
            // res.send('** SERVEUR SPARTA **');
          })



        this.app.listen(this.nodePort, () => {

            this.displayServeurName();
            // Success callback
            console.log("Le serveur écoute sur le port : "+this.nodePort);
        });
    }

}
