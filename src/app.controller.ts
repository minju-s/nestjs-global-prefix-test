import { Controller, Get, Param } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  getHello(@Param('prefix') prefix: string): string {
    return prefix;
  }
}
