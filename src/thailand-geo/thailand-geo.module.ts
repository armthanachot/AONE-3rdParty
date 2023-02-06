import { Module } from '@nestjs/common';
import { ThailandGeoService } from './thailand-geo.service';
import { ThailandGeoController } from './thailand-geo.controller';

@Module({
  controllers: [ThailandGeoController],
  providers: [ThailandGeoService]
})
export class ThailandGeoModule {}
