import { IsNotEmpty, IsString, IsNumber, IsEmail, IsOptional, Min, Max } from "class-validator";

export class PacienteDto {
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    readonly nombre: string;

    @IsNotEmpty()
    @IsNumber({}, { message: 'El expediente debe ser un número' })
    readonly expediente: number;

    @IsOptional()
    @IsNumber({}, { message: 'El teléfono debe ser un número' })
    @Min(1000000000, { message: 'El teléfono debe tener al menos 10 dígitos' })
    @Max(9999999999, { message: 'El teléfono no puede tener más de 10 dígitos' })
    readonly telefono: number;

    @IsOptional()
    @IsEmail({}, { message: 'El correo debe ser un correo electrónico válido' })
    readonly correo: string;

    @IsOptional()
    @IsNumber({}, { message: 'El teléfono de emergencia debe ser un número' })
    @Min(1000000000, { message: 'El teléfono de emergencia debe tener al menos 10 dígitos' })
    @Max(9999999999, { message: 'El teléfono de emergencia no puede tener más de 10 dígitos' })
    readonly telefonoEmergencia: number;

    @IsOptional()
    @IsNumber({}, { message: 'El ID del historial debe ser un número' })
    readonly idHistorial: number;
}