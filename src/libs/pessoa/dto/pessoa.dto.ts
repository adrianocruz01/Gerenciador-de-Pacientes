import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePessoaDto {
  @IsNotEmpty({ message: 'Email não pode ser vazio.' })
  @IsString({ message: 'Email deve ser uma String' })
  email: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsString({ message: 'Nome deve ser uma String' })
  name?: string;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsNumber()
  years?: number;
}
