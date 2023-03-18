import { Controller, Get,Request,Post,UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { jwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuth } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuth)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @UseGuards(jwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req){
    return req.user;
  }
}