import { Test, TestingModule } from '@nestjs/testing';
import { CitaService } from './cita.service';

describe('CitaService', () => {
  let service: CitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitaService],
    }).compile();

    service = module.get<CitaService>(CitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
