import { Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './service/admin-auth.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AuthController } from 'src/libs/auth/auth.controller';
import { AuthService } from 'src/libs/auth/auth.service';
import { PrismaService } from 'src/shared/db/libs/prisma/prisma.service';
import { AdminJwtStrategy } from './admin-jwt-strategy';

@Module({
    imports: [
        JwtModule.registerAsync({
          inject: [ConfigService],
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get<string>('JWT_ADMIN_SECRET_KEY'),
            global: true,
            signOptions: { algorithm: 'HS256' },
          }),
        }),
      ],
      controllers: [AdminAuthController],
      providers: [
        AdminAuthService,
        PrismaService,
        AdminJwtStrategy,
        JwtService,
      ],
      exports: [AdminAuthService, JwtService]
})
export class AdminAuthModule {}
