import { Body, Controller, Post, Get } from '@nestjs/common';
import { LicenciesService } from './licencies.service';
import { CreateLicencieDto } from './create-licencie.dto';

@Controller('licencies')
export class LicenciesController {
  constructor(private licencieService: LicenciesService) {}

  @Get()
  async findAll() {
    return this.licencieService.findAll();
  }

  @Post()
  async create(@Body() createLicencieDto: CreateLicencieDto) {
    return this.licencieService.createLicencie(createLicencieDto);
  }
}
