import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../shared/db/libs/prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt-strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET_KEY, 
    //   secretOrPrivateKey: process.env.JWT_SECRET_KEY,
    //   signOptions: { expiresIn: '60m' }, 
    //   global: true
    // }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET_KEY'),
          global: true,
          signOptions: {
            algorithm: 'HS256',
          },
        }
      },
    })
  ],
  controllers: [AuthController], 
  providers: [AuthService, PrismaService, JwtService, JwtStrategy, {
    provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
  }],
})
export class AuthModule {}
