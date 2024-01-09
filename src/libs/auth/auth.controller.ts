import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth.dto';
import { Public } from './guards/public';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post()
    async login(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
        return this.authService.login(authCredentialsDto);
    }
}