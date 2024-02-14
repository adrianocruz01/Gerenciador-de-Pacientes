import { Module } from '@nestjs/common';
import { ReceptionController } from './receipt-surgical.controller';
import { ReceptionService } from './service/create-receipt-surgical.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { GetReceptionFormService } from './service/get-reception.service';
import { AuthModule } from 'src/libs/auth/auth.module';
import { UpdateFichaReceipt } from './service/update-surgical.service';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [ReceptionService, GetReceptionFormService, UpdateFichaReceipt],
  controllers: [ReceptionController],
})
export class ReceiptModule {}
