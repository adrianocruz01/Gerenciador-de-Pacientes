import { Body, Controller, Post } from '@nestjs/common';
import { CollaboratorAuthService } from './services/collaborator-auth.service';
import { CollaboratorCredentialsDto } from './dto/collaborator-credentials.dto';
import { Public } from './guards/public';
import { AdminAuthService } from './services/admin-auth.service';
import { AdminCredentialsDto } from './dto/admin-credentials.dto';

@Controller('login')
export class AuthController {
  constructor(
    private readonly collaboratorAuthService: CollaboratorAuthService,
    private readonly adminAuthService: AdminAuthService,
  ) {}

  @Public()
  @Post()
  async login(@Body() authCredentialsDto: CollaboratorCredentialsDto): Promise<{ accessToken: string }> {
    return this.collaboratorAuthService.login(authCredentialsDto);
  }

  @Public()
  @Post('adm')
  async loginAdmin(@Body() authCredentialsDto: AdminCredentialsDto): Promise<{ accessToken: string }> {
    return this.adminAuthService.login(authCredentialsDto);
  }
}
