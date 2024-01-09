import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { z } from 'zod'
import { ConfigService } from '@nestjs/config'

export const tokenPayloadSchema = z.object({
  cpf: z.string(),
  sub: z.number(),
  iat: z.number()
})

export type UserPayload = z.infer<typeof tokenPayloadSchema>

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService
  ) {
    const key = configService.get<string>('JWT_SECRET_KEY');

  console.log('JWT Secret Key:', key);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: key,
      secretOrPrivateKey: key,
    })
  }

  async validate(payload: UserPayload) {
    return tokenPayloadSchema.parse(payload)
  }
}
