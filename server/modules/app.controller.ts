import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  get() {

    return {
      title: 'Pong from NestJS server',
      responded: new Date()
    };
  }
}
