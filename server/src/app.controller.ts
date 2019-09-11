import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}