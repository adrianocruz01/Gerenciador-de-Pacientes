import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { CreateCollabService } from './service/create-collab.service';
import { CollabController } from './collab.controller';
import { SearchByCPFCollabService } from './service/search-by-cpf-collab.service';
import { CollabService } from './service/search-collab.service';
import { UpdateCollabService } from './service/update.collab.service';
import { AdminAuthModule } from '../auth/admin-auth.module';

@Module({
    imports: [PrismaModule, AdminAuthModule],
    providers: [
        SearchByCPFCollabService,
        CollabService,
        CreateCollabService,
        UpdateCollabService,
    ],
    controllers: [CollabController],
})
export class CollabModule { }
