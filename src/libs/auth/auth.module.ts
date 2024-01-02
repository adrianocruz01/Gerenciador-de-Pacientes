import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../../shared/db/libs/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    // JwtModule pode ser configurado aqui se você estiver usando JWT
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Use uma chave secreta
      signOptions: { expiresIn: '60m' }, // Exemplo de tempo de expiração
    }),
  ],
  controllers: [AuthController], // Inclua AuthController
  providers: [AuthService, PrismaService], // Inclua AuthService e PrismaService
})
export class AuthModule {}
