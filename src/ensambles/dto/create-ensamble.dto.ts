import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateEnsembleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @MaxLength(500)
  description: string;
}
