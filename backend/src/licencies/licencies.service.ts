import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLicencieDto } from './create-licencie.dto';
import { Licencies } from './licencie.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class LicenciesService {
  constructor(
    private userService: UsersService,
    @InjectRepository(Licencies)
    private licencieRepository: Repository<Licencies>,
  ) {}

  async findAll(): Promise<Licencies[]> {
    return await this.licencieRepository.find();
  }

  async createLicencie(createLicencieDto: CreateLicencieDto) {
    const user = await this.userService.findOneByID(createLicencieDto.userId);
    if (!user) throw new NotFoundException();
    const newLicencie = this.licencieRepository.create({
      ...createLicencieDto,
      user,
    });
    return this.licencieRepository.save(newLicencie);
  }
}
