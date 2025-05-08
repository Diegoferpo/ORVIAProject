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

    findAll(): IPaciente[] {
        return this.pacientes;
    }

    findOne(id: string): IPaciente | null{
    return this.pacientes.find(paciente => paciente.id === id) || null;
    }

    update(id: string, PacienteDto: PacienteDto): IPaciente | null {
        const newPaciente = {id, ...PacienteDto};
        this.pacientes = this.pacientes.map(p => (p.id === id ? newPaciente : p));
        return newPaciente;
    }

    delete(id: string): IPaciente | null {
        const paciente = this.findOne(id);
        if (paciente) {
            this.pacientes = this.pacientes.filter(p => p.id !== id);
            return paciente;
        }
        return null;
    }
}