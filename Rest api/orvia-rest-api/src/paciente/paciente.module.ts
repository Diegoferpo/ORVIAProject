import { Module } from '@nestjs/common';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';

@Module({
    controllers: [PacienteController],
    providers: [PacienteService],
})
export class PacienteModule {}
