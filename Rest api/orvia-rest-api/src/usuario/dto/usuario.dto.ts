import { IsNotEmpty, IsString, IsNumber, IsEmail, IsOptional, Min, Max } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";


export class UsuarioDto{
    readonly nombre: string;
    readonly apellido: string;
    readonly puesto: string;
    readonly telefono: number;
    readonly fechaNac: Date;
}