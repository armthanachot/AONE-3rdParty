import { Test, TestingModule } from '@nestjs/testing';
import { ThailandGeoService } from './thailand-geo.service';

describe('ThailandGeoService', () => {
  let service: ThailandGeoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThailandGeoService],
    }).compile();

    service = module.get<ThailandGeoService>(ThailandGeoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
