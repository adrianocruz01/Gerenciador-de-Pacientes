import { Module } from '@nestjs/common';
import { PessoaModule } from './libs/pessoa/person.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UploudModule } from './libs/uploud/uploud.module';
import { AuthModule } from './libs/auth/auth.module';
import { PatientModule } from './libs/patient/patient.module';
import { ConfigModule } from '@nestjs/config';
import { ProcedureModule } from './libs/procedures/procedure.module';
import { PatientProcedureModule } from './libs/patient-procedures/patient-procedure.module';
import { NutritionalModule } from './libs/forms/nutritional/nutritional.module';
import { EnfermagemSaeModule } from './libs/forms/enfermagem-SAE/enfermagem-sae.module';
import { PatientAdmissionModule } from './libs/forms/patient-admission/patient-admission.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      expandVariables: true,
      // envFilePath: '.env',
    }),
    PessoaModule,
    UploudModule,
    AuthModule,
    PatientModule,
    ProcedureModule,
    PatientProcedureModule,
    NutritionalModule,
    EnfermagemSaeModule,
    PatientAdmissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
