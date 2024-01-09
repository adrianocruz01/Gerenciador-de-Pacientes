import { IsString, IsDate, Matches } from "class-validator";

export class DataPatient {

    @IsString()
    nome: string;

    @IsString()
    cpf: string;

    @IsString()
    sexo: string;

    @IsDate()
    dtnascimento: Date;
}