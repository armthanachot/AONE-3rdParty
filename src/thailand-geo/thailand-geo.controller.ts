import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThailandGeoService } from './thailand-geo.service';
import { CreateThailandGeoDto } from './dto/create-thailand-geo.dto';
import { UpdateThailandGeoDto } from './dto/update-thailand-geo.dto';

@Controller('thailand-geo')
export class ThailandGeoController {
  constructor(private readonly thailandGeoService: ThailandGeoService) {}

  @Post()
  create(@Body() createThailandGeoDto: CreateThailandGeoDto) {
    return this.thailandGeoService.create(createThailandGeoDto);
  }

  @Get()
  findAll() {
    return this.thailandGeoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thailandGeoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThailandGeoDto: UpdateThailandGeoDto) {
    return this.thailandGeoService.update(+id, updateThailandGeoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thailandGeoService.remove(+id);
  }
}
