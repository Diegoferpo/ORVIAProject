import { Body, Controller, Delete, Get, Param, Post, Put, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, request } from 'express';
import { PacienteService } from './paciente.service';
import { PacienteDto } from './dto/paciente.dto';

@Controller('api/v1/paciente')
export class PacienteController {

    constructor(private readonly pacienteService: PacienteService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    method(@Body() PacienteDto: PacienteDto) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('Algo salio mal'), 10000);
        });
        //return this.pacienteService.create(PacienteDto);
    }

    @Get()
    findAll() {
        return this.pacienteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pacienteService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() PacienteDto: PacienteDto) {
        return this.pacienteService.update(id, PacienteDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.pacienteService.delete(id);
    }
}
