import { Controller, Get,Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'
import { Cron } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  getHello(@Req() request: Request): string {
    //console.log(request.params)
    return this.appService.getHello();
  }
  @Cron('11 * * * * *')
  async sendEmailPushNotification(){
    await this.appService.myFuc();
  }
}
