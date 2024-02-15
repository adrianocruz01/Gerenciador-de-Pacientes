import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from '../shared/db/libs/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { CollaboratorAuthService } from './services/collaborator-auth.service';
import { JwtStrategy } from './jwt-strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AdminAuthService } from './services/admin-auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        global: true,
        signOptions: { algorithm: 'HS256' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AdminAuthService, CollaboratorAuthService, PrismaService, JwtStrategy, JwtService],
  exports: [CollaboratorAuthService, AdminAuthService, JwtService],
})
export class AuthModule {}
