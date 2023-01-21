import express, { Application } from 'express';
import handleError from '../error/errorHandler.middelware';
import router from '../router/something.router';

class AppServer{

    public app: Application;
    public port: number;

    constructor(){ 
        this.app = express();
        this.port = 4000;
    }

    private middleWares(): void{
        this.app.use(handleError);
    }

    private routes(){
        this.app.use('/api/somenthing', router )
    }

    public appStart():void{
        this.routes();
        this.middleWares();
        this.app.listen( this.port, ()=>{
            console.log('server running');
        })
    }

}


export default AppServer;