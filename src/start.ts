/**
 * npm install -g ts-node
 * ts-node start.ts
 */
import { Serveur }  from "./serveur";
let srv = new Serveur(8080);
srv.run();


