import express, {Application} from 'express';
import  morgan  from "morgan";


export class App {
 
 private  app: Application

    constructor (private port?:number | string) {
        this.app = express(); 
        this.settings();
        this.middleweares();
    }

settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
}

middleweares() {
    this.app.use(morgan('dev'));
}

   async listen() {
    await this.app.listen(this.app.get('port'));
console.log('server on port', this.app.get('port'));

    }
    
}