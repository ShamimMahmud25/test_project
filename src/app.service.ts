import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  myFuc():string{
    console.log("Hi I am here")
    return "I am here"
  }
}
