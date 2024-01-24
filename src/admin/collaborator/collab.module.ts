import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { CreateCollabService } from './service/create-collab.service';
import { CollabController } from './collab.controller';
import { SearchByCPFCollabService } from './service/search-by-cpf-collab.service';

@Module({
    imports: [PrismaModule],
    controllers: [CollabController],
    providers: [SearchByCPFCollabService, CreateCollabService],
})
export class CollabModule { }
