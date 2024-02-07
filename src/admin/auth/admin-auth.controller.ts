import { Body, Controller, Post } from '@nestjs/common';
import { AuthAdmCredentialsDto } from './dto/auth.dto';
// import { Public } from './guards/public';
import { AdminAuthService } from './service/admin-auth.service';

@Controller('login')
export class AdminAuthController {
  constructor(private readonly authAdmService: AdminAuthService) {}

  @Post('adm')
  async login(@Body() authAdmCredentialsDto: AuthAdmCredentialsDto): Promise<{ accessToken: string }> {
    return this.authAdmService.login(authAdmCredentialsDto);
  }
}
