import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAbout(): string {
    return 'This is about page';
  }
  getNew(): string {
    return 'This is new page';
  }
  getNews(): string {
    return 'This is news page';
  }
}
