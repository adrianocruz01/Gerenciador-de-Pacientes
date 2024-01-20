import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { SAETriagemController } from './enfermagem-sae.controller';
import { CreateSAEFormService } from './service/create-enfermagem-sae.service';
import { GetEnfermagemSaeFormService } from './service/get-enfermagem-sae.service';

@Module({
    imports: [PrismaModule],
    controllers: [SAETriagemController],
    providers: [CreateSAEFormService, GetEnfermagemSaeFormService]
})
export class EnfermagemSaeModule { }