import { Test, TestingModule } from '@nestjs/testing';
import { LicenciesController } from './licencies.controller';

describe('LicenciesController', () => {
  let controller: LicenciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicenciesController],
    }).compile();

    controller = module.get<LicenciesController>(LicenciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
