import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsDate, IsNotEmpty, IsDateString, Matches } from 'class-validator';

export class CreateColaboradorDto {
    @IsOptional()
    @IsString()
    @Matches(/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, {
        message: 'Nome completo inválido',
    })
    nome?: string;

    @IsOptional()
    @IsString()
    @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { message: 'CPF inválido' })
    cpf?: string;

    @IsString()
    senha: string;

    @IsOptional()
    @IsString()
    especialidade?: string;

    @IsOptional()
    @IsString()
    matricula?: string;

    @IsOptional()
    @IsString()
    matricula_estado?: string;

    @IsOptional()
    @IsDate()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    @IsDate({ message: 'Data de nascimento inválida' })
    dtcadastro?: Date;

    @IsOptional()
    @IsDate()
    dtalteracao?: Date;

    @IsOptional()
    @IsString()
    status?: string;
}
