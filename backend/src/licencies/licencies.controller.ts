import { Body, Controller, Post } from '@nestjs/common';
import { LicenciesService } from './licencies.service';
import { CreateLicencieDto } from './create-licencie.dto';

@Controller('licencies')
export class LicenciesController {
  constructor(private licencieService: LicenciesService) {}

  @Post()
  async create(@Body() createLicencieDto: CreateLicencieDto) {
    return this.licencieService.createLicencie(createLicencieDto);
  }
}
