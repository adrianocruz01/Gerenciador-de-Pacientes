import { Test, TestingModule } from '@nestjs/testing';
import { PatientProcedureController } from './patient-procedure.controller';

describe('ProcedureController', () => {
  let controller: PatientProcedureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientProcedureController],
    }).compile();

    controller = module.get<PatientProcedureController>(PatientProcedureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
