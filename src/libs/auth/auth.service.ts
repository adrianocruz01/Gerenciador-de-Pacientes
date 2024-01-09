// src/libs/auth/auth.service.ts

import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../shared/db/libs/prisma/prisma.service';
import { AuthCredentialsDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const { cpf, password } = authCredentialsDto;
    const key = this.configService.get<string>('JWT_SECRET_KEY');

    const colaborador = await this.prisma.colaborador.findUnique({
      where: { cpf },
    });

    if (colaborador && await bcrypt.compare(password, colaborador.senha)) {
      const payload = { cpf: colaborador.cpf, sub: colaborador.colaborador_id };
      const accessToken = await this.jwtService.signAsync(payload, {
        secret: key,
      });
      return { accessToken };
    } else {
      throw new BadRequestException('Credenciais inválidas.');
    }
  }
}
