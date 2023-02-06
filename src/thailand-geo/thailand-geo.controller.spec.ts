import { Test, TestingModule } from '@nestjs/testing';
import { ThailandGeoController } from './thailand-geo.controller';
import { ThailandGeoService } from './thailand-geo.service';

describe('ThailandGeoController', () => {
  let controller: ThailandGeoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThailandGeoController],
      providers: [ThailandGeoService],
    }).compile();

    controller = module.get<ThailandGeoController>(ThailandGeoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
