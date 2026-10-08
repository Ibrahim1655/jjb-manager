import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Role } from '../common/enums/role.enum';
import { Roles } from '../common/decorators/roles.decorator';
import { Public } from '../common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  async login(@Body() loginDTo: LoginDto): Promise<{ access_token: string }> {
    return await this.authService.login(loginDTo.email, loginDTo.password);
  }

  @Get('/profile')
  getProfile(@Request() req: any) {
    return req.user;
  }

  @Roles([Role.ADMIN])
  @Get('/admin')
  getAdminData() {
    return {
      message: 'Bienvenue admin !',
    };
  }
}
