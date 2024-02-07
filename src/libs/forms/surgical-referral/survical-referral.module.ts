import { Module } from '@nestjs/common';
import { SurvicalReferralController } from './survical-referral.controller';
import { PrismaModule } from 'src/shared/db/libs/prisma/prisma.module';
import { CreateSurvicalReferralService } from './service/create-survical-referral.service';
import { SearchSurvicalReferralService } from './service/serach-survical-referral.service';
import { AuthModule } from 'src/libs/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [CreateSurvicalReferralService, SearchSurvicalReferralService],
  controllers: [SurvicalReferralController],

})
export class SurvicalReferralModule {}
