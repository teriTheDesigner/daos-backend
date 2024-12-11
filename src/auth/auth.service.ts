import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(name: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(name);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._Id, name: user.name, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
