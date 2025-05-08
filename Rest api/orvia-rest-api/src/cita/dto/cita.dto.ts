import { IsNotEmpty, IsString, IsNumber, IsEmail, IsOptional, Min, Max } from "class-validator";

export class citaDto{
    readonly idHistorial: number;
    readonly fecha: Date;
    readonly duracion: number;
    readonly motivo: string;
    readonly observaciones: string;
    readonly recomendaciones: string;
    readonly comentarios: string;
}