import { ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from './public';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector, 
      private readonly authService: AuthService
    ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();
      const { authorization }: any = request.headers;
      if (!authorization || authorization.trim() === '') {
        throw new UnauthorizedException('Não autorizado');
      }
      const authToken = authorization.replace(/bearer/gim, '').trim();
      const resp = await this.authService.validateToken(authToken);
      request.decodedData = resp;
      return true;
    } catch (error) {
      console.log('Auth error - ', error.message);
      throw new ForbiddenException(error.message || 'Erro no servidor');
    }
  }
}
