import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: Function) {
    // tslint:disable-next-line: max-line-length

    // const allowedOrigins = ["http://192.168.0.12:4455","http://192.168.0.12:4200"];



    
    // res.header("Access-Control-Allow-Origin", allowedOrigins);
    // res.header("Access-Control-Allow-Origin", "http://192.168.0.12:4200");
    // res.header("Access-Control-Allow-Credentials", "true");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   
    next();
  }
}
