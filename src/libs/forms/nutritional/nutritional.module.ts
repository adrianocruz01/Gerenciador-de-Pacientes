import { Module } from '@nestjs/common';
import { NutritionalController } from './nutritional.controller';
import { NutritionalService } from './services/nutritional.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NutritionalController],
  providers: [NutritionalService],
})
export class NutritionalModule {}
