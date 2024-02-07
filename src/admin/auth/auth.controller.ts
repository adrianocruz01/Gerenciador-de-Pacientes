import { Body, Controller, Post } from '@nestjs/common';
import { AuthAdmCredentialsDto } from './dto/auth.dto';
// import { Public } from './guards/public';
import { AuthAdmService } from './service/auth.service';

@Controller('login')
export class AuthAdmController {
  constructor(private readonly authAdmService: AuthAdmService) {}

//   @Public()
  @Post('adm')
  async login(@Body() authAdmCredentialsDto: AuthAdmCredentialsDto): Promise<{ accessToken: string }> {
    return this.authAdmService.login(authAdmCredentialsDto);
  }
}
