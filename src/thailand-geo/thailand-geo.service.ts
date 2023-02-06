import { Injectable } from '@nestjs/common';
import { CreateThailandGeoDto } from './dto/create-thailand-geo.dto';
import { UpdateThailandGeoDto } from './dto/update-thailand-geo.dto';

@Injectable()
export class ThailandGeoService {
  create(createThailandGeoDto: CreateThailandGeoDto) {
    return 'This action adds a new thailandGeo';
  }

  findAll() {
    return `This action returns all thailandGeo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thailandGeo`;
  }

  update(id: number, updateThailandGeoDto: UpdateThailandGeoDto) {
    return `This action updates a #${id} thailandGeo`;
  }

  remove(id: number) {
    return `This action removes a #${id} thailandGeo`;
  }
}
