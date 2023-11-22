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
    console.log("Hello I have gone")
    return "Hello I have gone"
  }
}
