import { Test, TestingModule } from '@nestjs/testing';
import { NutritionalController } from './nutritional.controller';

describe('NutritionalController', () => {
  let controller: NutritionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutritionalController],
    }).compile();

    controller = module.get<NutritionalController>(NutritionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
