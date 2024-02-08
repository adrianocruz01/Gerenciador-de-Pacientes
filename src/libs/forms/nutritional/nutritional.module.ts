import { Module } from '@nestjs/common';
import { NutritionalController } from './nutritional.controller';
import { CreateNutritionalFormService } from './services/create-nutritional-form.service';
import { GetNutritionalFormService } from './services/get-nutritional-form.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { AuthModule } from 'src/libs/auth/auth.module';
import { UpdateFichaNutricionalService } from './services/update-nutricional.service';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [NutritionalController],
  providers: [CreateNutritionalFormService, GetNutritionalFormService, UpdateFichaNutricionalService],
})
export class NutritionalModule {}
