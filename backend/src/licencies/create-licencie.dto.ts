import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Ceinture } from '../common/enums/ceinture.enums';

export class CreateLicencieDto {
  @IsNumber()
  @IsNotEmpty()
  poids: number;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsEnum(Ceinture)
  @IsNotEmpty()
  ceinture: Ceinture;

  @IsNumber()
  userId: number;
}
