import { Module } from '@nestjs/common';
import { LicenciesService } from './licencies.service';
import { LicenciesController } from './licencies.controller';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Licencies } from './licencie.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Licencies])],
  providers: [LicenciesService],
  controllers: [LicenciesController],
})
export class LicenciesModule {}
