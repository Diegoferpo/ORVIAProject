import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule {}

