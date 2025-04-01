import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('prueba')
  prueba(): string {
    const preuba = 'prueba';
    console.log('🚀 ~ AuthController ~ prueba ~ preuba:', preuba);
    return preuba;
  }
}
