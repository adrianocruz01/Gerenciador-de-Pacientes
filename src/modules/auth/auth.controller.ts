// // src/auth/auth.controller.ts
// import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post('login')
//   async login(@Body() body: { cpf: string; password: string }) {
//     // ... lógica para o endpoint de login
//   }
// }
