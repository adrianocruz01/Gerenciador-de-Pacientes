import { ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CollaboratorAuthService } from '../services/collaborator-auth.service';

@Injectable()
export class AdminCollaboratorAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly authService: CollaboratorAuthService) {
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

      // Check role
      if (resp.role !== 'admin' && resp.role !== 'colaborador') {
        throw new ForbiddenException('Não autorizado');
      }

      request.user = resp;

      // request.decodedData = resp;
      return true;
    } catch (error) {
      console.log('Auth error - ', error.message);
      throw new ForbiddenException(error.message || 'Erro no servidor');
    }
  }
}
