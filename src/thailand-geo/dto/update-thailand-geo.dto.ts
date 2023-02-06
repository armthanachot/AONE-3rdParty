import { PartialType } from '@nestjs/mapped-types';
import { CreateThailandGeoDto } from './create-thailand-geo.dto';

export class UpdateThailandGeoDto extends PartialType(CreateThailandGeoDto) {}
