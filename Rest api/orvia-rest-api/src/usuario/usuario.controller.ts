import { Controller, Body, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { ClientProxyOrvia } from 'src/common/proxy/client-proxy';

@Controller('api/v2/usuario')
export class UsuarioController {
  constructor(private readonly clientProxy: ClientProxyOrvia) {}

  @Post()
  async create(@Body() usuarioDto: UsuarioDto): Promise<{ status: string }> {
    await this.clientProxy.send({ type: 'CREATE', data: usuarioDto });
    return { status: 'Mensaje enviado a SQS: CREATE' };
  }

  @Get()
  async findAll(): Promise<{ status: string }> {
    await this.clientProxy.send({ type: 'FINDALL' });
    return { status: 'Mensaje enviado a SQS: FINDALL' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{ status: string }> {
    await this.clientProxy.send({ type: 'FINDONE', data: id });
    return { status: 'Mensaje enviado a SQS: FINDONE' };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() usuarioDto: UsuarioDto): Promise<{ status: string }> {
    await this.clientProxy.send({ type: 'UPDATE', data: { id, usuarioDto } });
    return { status: 'Mensaje enviado a SQS: UPDATE' };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ status: string }> {
    await this.clientProxy.send({ type: 'DELETE', data: id });
    return { status: 'Mensaje enviado a SQS: DELETE' };
  }
}
