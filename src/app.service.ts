import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAbout(): string {
    return 'This is about page';
  }
  myFuc():string{
    console.log("Hi I am here")
    return "I am here"
  }
}
