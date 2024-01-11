import {  IsUUID } from "class-validator";

export class SearchDataDto {
    @IsUUID()
    id: string;
}