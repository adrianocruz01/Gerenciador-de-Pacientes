import { ExecutionContext, createParamDecorator } from '@nestjs/common';

interface UserPayload {
  sub: number;
  cpf: number;
}

export const CurrentUser = createParamDecorator((_: never, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();

  return request.user as UserPayload;
});
