import { Module } from '@nestjs/common';
import { ReceptionController } from './receipt-surgical.controller';
import { ReceptionService } from './service/receipt-surgical.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { GetReceptionFormService } from './service/get-reception.service';
import { AuthModule } from 'src/libs/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [ReceptionController],
  providers: [ReceptionService, GetReceptionFormService],
})
export class ReceiptModule {}
