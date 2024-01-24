import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { CreateCollabService } from './service/collab.service';
import { Collabontroller } from './collab.controller';

@Module({
    imports: [PrismaModule],
    providers: [CreateCollabService],
    controllers: [Collabontroller]
})
export class CollabModule { }
