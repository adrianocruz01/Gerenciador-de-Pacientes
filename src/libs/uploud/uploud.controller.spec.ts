import { Test, TestingModule } from '@nestjs/testing';
import { UploudController } from './uploud.controller';
import { UploudService } from './uploud.service';

describe('UploudController', () => {
  let controller: UploudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploudController],
      providers: [UploudService],
    }).compile();

    controller = module.get<UploudController>(UploudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
