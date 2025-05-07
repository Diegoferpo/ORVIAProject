import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request, request } from 'express';
import { PacienteService } from './paciente.service';
import { PacienteDto } from './dto/paciente.dto';

@Controller('api/v1/paciente')
export class PacienteController {

    constructor(private readonly pacienteService: PacienteService) {}

    @Post()
    method(@Body() PacienteDto: PacienteDto) {
        return this.pacienteService.create(PacienteDto);
    }
}
