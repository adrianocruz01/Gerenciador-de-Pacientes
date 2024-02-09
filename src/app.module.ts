import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UploadModule } from './libs/upload/upload.module';
import { AuthModule } from './libs/auth/auth.module';
import { PatientModule } from './libs/patient/patient.module';
import { ConfigModule } from '@nestjs/config';
import { ProcedureModule } from './libs/procedures/procedure.module';
import { PatientProcedureModule } from './libs/patient-procedures/patient-procedure.module';
import { NutritionalModule } from './libs/forms/nutritional/nutritional.module';
import { EnfermagemSaeModule } from './libs/forms/enfermagem-SAE/enfermagem-sae.module';
import { PatientAdmissionModule } from './libs/forms/patient-admission/patient-admission.module';
import { SurvicalReferralModule } from './libs/forms/surgical-referral/survical-referral.module';
import { ReceiptModule } from './libs/forms/receipt-surgical/receipt.module';
import { IntraoperativeModule } from './libs/forms/intraoperative/intraoperative.module';
import { MaterialControlModule } from './libs/forms/material-control/material-control.module';
import { PatientTransferModule } from './libs/forms/patient-transfer/patient-transfer.module';
import { PatientApartamentModule } from './libs/forms/patient-apartament/patient-apartament.module';
import { NursingDiagnosisModule } from './libs/forms/nursing-diagnosis/nursing-diagnosis.module';
import { CollabModule } from './admin/collaborator/collab.module';
import { DashboardModule } from './admin/dashboard/dashboard.module';
import { AdminAuthModule } from './admin/auth/admin-auth.module';
import { AdmPatientModule } from './admin/patient/admpatient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      expandVariables: true,
      // envFilePath: '.env',
    }),
    AdminAuthModule,
    UploadModule,
    AuthModule,
    PatientModule,
    ProcedureModule,
    PatientProcedureModule,
    NutritionalModule,
    EnfermagemSaeModule,
    PatientAdmissionModule,
    SurvicalReferralModule,
    ReceiptModule,
    IntraoperativeModule,
    MaterialControlModule,
    PatientTransferModule,
    PatientApartamentModule,
    NursingDiagnosisModule,
    CollabModule,
    DashboardModule,
    AdmPatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
