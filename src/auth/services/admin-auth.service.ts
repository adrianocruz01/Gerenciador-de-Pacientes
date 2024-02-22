import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminCredentialsDto } from '../dto/admin-credentials.dto';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: process.env.JWT_SECRET_KEY,
    });
  }

  async login(authAdmCredentialsDto: AdminCredentialsDto): Promise<{ accessToken: string }> {
    const { cpf, password } = authAdmCredentialsDto;

    const administrador = await this.prisma.colaborador.findUnique({
      where: { cpf, especialidade: 'Administrador' },
    });

    if (administrador && (await bcrypt.compare(password, administrador.senha))) {
      const payload = { cpf: administrador.cpf, sub: administrador.colaborador_id, role: 'admin' };
      const accessToken = this.jwtService.sign(payload, {
        privateKey: process.env.JWT_SECRET_KEY,
      });
      return { accessToken };
    } else {
      throw new UnauthorizedException('Usuario ou senha incorretos!');
    }
  }
}
