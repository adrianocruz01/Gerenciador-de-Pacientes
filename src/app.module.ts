import { Module } from '@nestjs/common';
import { PessoaModule } from './modules/pessoa/person.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UploudModule } from './modules/uploud/uploud.module';

@Module({
  imports: [PessoaModule, UploudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
