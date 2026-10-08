import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const userLogged = await this.userService.findOneByeMail(email);

    if (!userLogged) {
      throw new UnauthorizedException();
    }
    const isMatched = await bcrypt.compare(password, userLogged.password);
    if (isMatched) {
      return {
        access_token: await this.jwtService.signAsync({
          sub: userLogged.id,
          email: userLogged.email,
          role: userLogged.role,
        }),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
