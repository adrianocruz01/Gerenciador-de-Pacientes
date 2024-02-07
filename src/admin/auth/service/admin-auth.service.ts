import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { AuthAdmCredentialsDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  validateToken(token: string) {
    return this.jwtService.verify(token, {
        secret : process.env.JWT_ADMIN_SECRET_KEY,
    });
  }

  async login(authAdmCredentialsDto: AuthAdmCredentialsDto): Promise<{ accessToken: string }> {
    const { cpf, password } = authAdmCredentialsDto;

    const administrador = await this.prisma.administrador.findUnique({
      where: { cpf },
    });

    if (administrador && (await bcrypt.compare(password, administrador.senha))) {
      const payload = { cpf: administrador.cpf, sub: administrador.administrador_id };
      const accessToken = this.jwtService.sign(payload, {
        privateKey: process.env.JWT_ADMIN_SECRET_KEY,
      });
      return { accessToken };
    } else {
      throw new UnauthorizedException('Usuario ou senha incorretos!');
    }
  }
}
