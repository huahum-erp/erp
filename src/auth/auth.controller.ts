import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('prueba')
  prueba(): string {
    const preuba = 'prueba';
    return preuba;
  }
}
