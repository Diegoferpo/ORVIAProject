import { Injectable } from '@nestjs/common';
import { PacienteDto } from './dto/paciente.dto';
import { IPaciente } from './paciente.interface';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class PacienteService {

    pacientes: IPaciente[] = [];
    create(PacienteDto:PacienteDto):IPaciente{
        const paciente = {
            id: uuidv4(),
            ...PacienteDto
        };
        this.pacientes.push(paciente);
        return paciente;
    }
    
    }