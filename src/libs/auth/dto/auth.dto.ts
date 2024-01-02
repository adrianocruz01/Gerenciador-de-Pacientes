import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDto {
    
    @IsString()
    @Matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, { message: 'CPF inválido' })
    cpf: string;

    @IsString()
    @MinLength(6, {message: "A senha deve ter pelo menos 6 caracteres" })
    @MaxLength(40, {message: "A senha não pode ter mais de 40 caracteres" })
    password: string;

}
