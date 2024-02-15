import { ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminAuthService } from '../services/admin-auth.service';

@Injectable()
export class AdminAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly authService: AdminAuthService) {
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

      if (resp.role !== 'admin') {
        throw new ForbiddenException('Não autorizado');
      }

      request.user = resp;
      return true;
    } catch (error) {
      console.log('Auth error - ', error.message);
      throw new ForbiddenException(error.message || 'Erro no servidor');
    }
  }
}
