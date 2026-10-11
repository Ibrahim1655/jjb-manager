import { Test, TestingModule } from '@nestjs/testing';
import { LicenciesService } from './licencies.service';

describe('LicenciesService', () => {
  let service: LicenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicenciesService],
    }).compile();

    service = module.get<LicenciesService>(LicenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
