import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello1')
  async hello1(@Res() res: Response) {
    return res.status(200).send('hello 1');
  }

  @Get('/hello2')
  async hello2(@Res() res: Response) {
    return res.status(200).send('hello 2');
  }
}
