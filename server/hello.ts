import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  findAll(): string {
    return 'it returns all Hello world';
  }

  @Get('test')
  findOther(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}