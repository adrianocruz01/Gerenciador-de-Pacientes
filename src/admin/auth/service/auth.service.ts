import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../shared/db/libs/prisma/prisma.service';
import { AuthAdmCredentialsDto } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthAdmService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authAdmCredentialsDto: AuthAdmCredentialsDto): Promise<{ accessToken: string }> {
    const { cpf, password } = authAdmCredentialsDto;

    const colaborador = await this.prisma.colaborador.findUnique({
      where: { cpf },
    });

    if (colaborador && (await bcrypt.compare(password, colaborador.senha))) {
      const payload = { cpf: colaborador.cpf, sub: colaborador.colaborador_id };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Usuario ou senha incorretos!');
    }
  }
}
