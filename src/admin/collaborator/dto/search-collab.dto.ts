import { IsOptional, IsString, Matches } from "class-validator";

export class SearchCollabDto {

    @IsOptional()
    @IsString()
    @Matches(/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, { message: 'Nome completo inválido' })
    nome?: string;

    @IsOptional()
    @IsString()
    @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { message: 'CPF inválido.' })
    cpf?: string;

}