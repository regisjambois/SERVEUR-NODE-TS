import * as os from 'os';

import * as http from 'http';



//import http = require('http'); 
//import os = require('os'); 

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

    onRequest(request: http.ServerRequest, response: http.ServerResponse) { 
        console.log('New request: ' + request.url); 
  
        response.writeHead(200, {'Content-Type': 'text/html'}); 
        response.write("HELLO WORLD"); 
        response.end(); 
       
    } 
  
    onStart() { 
        let httpServer = http.createServer(this.onRequest); 
        httpServer.listen(this.nodePort); 
        console.log('Server listenning on http://' + os.hostname() + ':' + this.nodePort + '/'); 
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

    /**
     * méthode run
     */
    public run() : void {
        this.displayServeurName();
        
        this.onStart();
    }


    
}




                                                                                                       
                                                                                                       