import { IsString, IsDate, IsUUID } from 'class-validator';

export class ProcedureDTO {
    @IsUUID()
    id: string;

    @IsString()
    descricao: string;

    @IsDate()
    data: Date;

}