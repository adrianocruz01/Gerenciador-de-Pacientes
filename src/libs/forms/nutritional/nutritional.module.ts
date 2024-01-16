import { Module } from '@nestjs/common';
import { NutritionalController } from './nutritional.controller';
import { CreateNutritionalFormService } from './services/create-nutritional-form.service';
import { GetNutritionalFormService } from './services/get-nutritional-form.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NutritionalController],
  providers: [CreateNutritionalFormService, GetNutritionalFormService],
})
export class NutritionalModule {}
