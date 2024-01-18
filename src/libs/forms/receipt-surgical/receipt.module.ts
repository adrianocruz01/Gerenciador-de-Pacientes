import { Module } from '@nestjs/common';
import { ReceptionController } from './receipt-surgical.controller';
import { ReceptionService } from './service/receipt-surgical.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { GetReceptionFormService } from './service/get-reception.service';

@Module({
  imports: [PrismaModule],
  controllers: [ReceptionController],
  providers: [ReceptionService, GetReceptionFormService],
})
export class ReceiptModule {}
