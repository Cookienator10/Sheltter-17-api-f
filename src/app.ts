import express, {Application} from 'express';
import  morgan  from 'morgan';


//routes
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';


export class App {
 
 private  app: Application

    constructor (private port?:number | string) {
        this.app = express(); 
        this.settings();
        this.middleweares();
        this.routes();
    }

settings() {
    this.app.set('port', this.port || process.env.PORT || 3000);
}

middleweares() {
    this.app.use(morgan('dev'));
    this.app.use(express.urlencoded({extended: false}));
}

routes() {
    this.app.use(IndexRoutes);
    this.app.use(PostRoutes);
}

async listen() {
await this.app.listen(this.app.get('port'));
console.log('server on port', this.app.get('port'));

    }
    
}