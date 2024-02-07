import { Module } from '@nestjs/common';
import { AuthAdmController } from './auth.controller';
import { AuthAdmService } from './service/auth.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [AuthAdmService],
    controllers: [AuthAdmController],
})
export class AuthAdmModule {}
