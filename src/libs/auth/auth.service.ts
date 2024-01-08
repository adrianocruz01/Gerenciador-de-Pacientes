import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../shared/db/libs/prisma/prisma.service';
import { AuthCredentialsDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { cpf, password } = authCredentialsDto;

    const colaborador = await this.prisma.colaborador.findFirst({
      where: { cpf },
    });

    if (colaborador && (await bcrypt.compare(password, colaborador.senha))) {
      const payload = { cpf: colaborador.cpf, sub: colaborador.colaborador_id };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new BadRequestException('Usuario ou senha incorretos!');
    }
  }
}
