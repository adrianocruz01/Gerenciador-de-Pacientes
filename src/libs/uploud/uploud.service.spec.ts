import { Test, TestingModule } from '@nestjs/testing';
import { UploudService } from './uploud.service';

describe('UploudService', () => {
  let service: UploudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploudService],
    }).compile();

    service = module.get<UploudService>(UploudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
