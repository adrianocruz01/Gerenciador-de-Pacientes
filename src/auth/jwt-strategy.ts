import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { z } from 'zod';
import { ConfigService } from '@nestjs/config';

export const tokenPayloadSchema = z.object({
  nome: z.string(),
  cpf: z.string(),
  sub: z.number(),
  iat: z.number(),
  role: z.enum(['admin', 'colaborador']),
});

export type UserPayload = z.infer<typeof tokenPayloadSchema>;

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const key = configService.get<string>('JWT_SECRET_KEY');
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: key,
      secretOrPrivateKey: key,
    });
  }

  async validate(payload: UserPayload): Promise<UserPayload> {
    return tokenPayloadSchema.parse(payload);
  }
}
