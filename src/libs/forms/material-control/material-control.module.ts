import { Module } from '@nestjs/common';
import { MaterialControleController } from './material-control.controller';
import { FichaControleMaterialService } from './service/create-material-control.service';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { SearchMaterialControlService } from './service/search-material-control.service';

@Module({
  imports: [PrismaModule],
  providers: [FichaControleMaterialService, SearchMaterialControlService],
  controllers: [MaterialControleController]
})
export class MaterialControlModule {}
