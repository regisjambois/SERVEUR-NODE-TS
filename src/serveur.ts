import * as express from 'express';

/**
 * SERVEUR SPARTA *
 */
export class Serveur {

    private nodePort: number;

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

        const app: express.Application = express();

        app.get('/', function (req, res) {
            
            res.send('** SERVEUR SPARTA **');
          })



        app.listen(this.nodePort, () => {

            this.displayServeurName();
            // Success callback
            console.log("Le serveur écoute sur le port : "+this.nodePort);
        });
    }

}
