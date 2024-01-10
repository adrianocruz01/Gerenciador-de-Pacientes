import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PessoaController } from 'src/modules/pessoa/person.controller';
import { PessoaService } from 'src/modules/pessoa/person.service';
import { CreatePessoaDto } from 'src/modules/pessoa/dto/pessoa.dto';
import { Pessoa } from 'src/modules/pessoa/entities/person.entity';
import { randomUUID } from 'crypto';

describe('PessoaController e2e', () => {
  let app: INestApplication;
  let pessoaController: PessoaController;
  let pessoaService: PessoaService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    pessoaService = moduleFixture.get<PessoaService>(PessoaService);
    pessoaController = moduleFixture.get<PessoaController>(PessoaController);
  });

  describe('createOne', () => {
    it('should call pessoaService.createOne with the provided dto', async () => {
      const email = randomUUID().toString();

      const createPessoaDto = new CreatePessoaDto();
      createPessoaDto.email = email;
      createPessoaDto.name = 'Teste da Silva';
      createPessoaDto.years = 23;

      const pessoa: Pessoa = new Pessoa();
      pessoa.email = email;
      pessoa.name = 'Teste da Silva';
      pessoa.years = 23;

      const createOneSpy = jest.spyOn(pessoaService, 'createOne').mockResolvedValue(pessoa);

      const response = await request(app.getHttpServer()).post('/pessoa/').send(createPessoaDto);

      expect(createOneSpy).toHaveBeenCalledWith(createPessoaDto);
      expect(response.status).toBe(201);
      expect(response.body.email).toEqual(createPessoaDto.email);
      expect(response.body.name).toEqual(createPessoaDto.name);
      expect(response.body.years).toEqual(createPessoaDto.years);
    });
  });
});
