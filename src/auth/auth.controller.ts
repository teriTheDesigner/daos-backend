import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.name, signInDto.password);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.usersService.findOne(req.user.name);
    return { name: user.name, email: user.email };
  }
}

//curl -X POST http://localhost:3000/auth/login -d '{"name": "Patres", "password": "secret"}' -H "Content-Type: application/json"
//curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUGF0cmVzIiwiaWF0IjoxNzMwNzI3MDE5LCJleHAiOjE3MzA3MjcwNzl9.39kRlqm_TlegnDN-7CDTgLufHzjr_OXv-lPrmVONAfE"
