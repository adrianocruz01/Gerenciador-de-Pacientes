import { Module } from '@nestjs/common';
import { PessoaModule } from './libs/pessoa/person.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UploudModule } from './libs/uploud/uploud.module';
import { AuthModule } from './libs/auth/auth.module';

@Module({
  imports: [PessoaModule, UploudModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
