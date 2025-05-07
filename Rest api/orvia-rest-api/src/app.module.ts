import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteController } from './paciente/paciente.controller';
import { PacienteService } from './paciente/paciente.service';
import { PacienteModule } from './paciente/paciente.module';
import { CitaController } from './cita/cita.controller';
import { CitaService } from './cita/cita.service';
import { CitaModule } from './cita/cita.module';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PacienteModule, CitaModule, UsuarioModule],
  controllers: [AppController, PacienteController, CitaController, UsuarioController],
  providers: [AppService, PacienteService, CitaService, UsuarioService],
})
export class AppModule {}
