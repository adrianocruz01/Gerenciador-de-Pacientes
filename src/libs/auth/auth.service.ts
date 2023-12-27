// // src/auth/auth.service.ts
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { PrismaService } from '../prisma/prisma.service';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class AuthService {
//   constructor(private prisma: PrismaService, private jwtService: JwtService) {}

//   async validateUser(cpf: string, password: string): Promise<any> {
//     // ... lógica para validar o usuário com Prisma
//   }

//   async login(cpf: string, password: string): Promise<{ access_token: string } | null> {
//     // ... lógica para realizar login
//   }
// }
