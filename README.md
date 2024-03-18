# Projeto NestJS com Prisma e MySQL

Este é um projeto NestJS que utiliza o Prisma como ORM para interagir com um banco de dados MySQL. Você pode facilmente adaptar este projeto para qualquer banco de dados de sua escolha.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação

1. Clone este repositório em sua máquina local:
   ```
   git clone https://github.com/adrianocruz01/Gerenciador-de-Pacientes.git
   cd icl-backend
   ```

2. Instale as dependências:
   ```
   npm install
   # ou
   yarn install
   ```

3. Configuração do banco de dados:
   - Crie um banco de dados MySQL e configure as credenciais no arquivo `.env`.
   - Execute as migrações para criar as tabelas do banco de dados:
     ```
     npx prisma migrate dev --name init
     # ou
     yarn prisma migrate dev --name init
     ```

4. Inicie o servidor:
   ```
   npm run start:dev
   # ou
   yarn start:dev
   ```

## Organização de Pastas

Este projeto segue uma estrutura de pastas organizada para facilitar o desenvolvimento, manutenção e escalabilidade. Aqui está uma visão geral da estrutura de pastas:
```
project-root/
  │    │─── prisma
  │    │    ├── migrations/
  │    │    │    └── 20231227210210_initial_db_structure/
  │    │    │    │      └── migration.sql
  │    │    │    └── migrations_lock.toml
  │    │    ├── seeds/
  │    │    │    └── run/
  │    │    │    │      └── add-adm.ts
  │    │    │    │      └── add-colaborador.ts
  │    │    │    │      └── add-procedimentos.ts
  │    │    │    └── seeder.ts
  │    │    └── schema.prisma
  ├── src/
  │    ├── libs/
  │    │    ├── auth/
  │    │    │    └── dto/
  │    │    │    │      └── create-auth.dtos.ts
  │    │    │    │      └── update-auth.dtos.ts
  │    │    │    └── entities/
  │    │    │    │      └── auth.entity.ts
  │    │    │    ├── auth.controller.spec.ts
  │    │    │    ├── auth.controller.ts
  │    │    │    ├── auth.module.ts
  │    │    │    ├── auth.service.ts
  │    │    │    ├── auth.service.spec.ts
  │    │    │    └── ... (outros arquivos relacionados ao módulo auth)
  │    │    ├── pessoa/
  │    │    │    └── dto/
  │    │    │    │      └── pessoa.dtos.ts
  │    │    │    └── entities/
  │    │    │    │      └── pessoa.entity.ts
  │    │    │    ├── pessoa.controller.ts
  │    │    │    ├── pessoa.module.ts
  │    │    │    ├── pessoa.service.ts
  │    │    │    └── ... (outros arquivos relacionados ao módulo Pessoa)
  │    │    ├── uploud/
  │    │    │    └── dto/
  │    │    │    │      └── create-uploud.dtos.ts
  │    │    │    │      └── update-uploud.dtos.ts
  │    │    │    └── entities/
  │    │    │    │      └── uploud.entity.ts
  │    │    │    ├── upload.interceptor.ts
  │    │    │    ├── upload.controller.spec.ts
  │    │    │    ├── upload.controller.ts
  │    │    │    ├── upload.module.ts
  │    │    │    ├── upload.service.spec.ts
  │    │    │    ├── upload.service.ts
  │    │    │    └── ... (outros arquivos relacionados ao módulo upload)
  │    ├── shared/
  │    │    ├── db/
  │    │    │    └── libs/
  │    │    │    │     └── prisma
  │    │    │    │           └── prisma.module.ts
  │    │    │    │           └── prisma.service.ts
  │    │    │    └── nest-cli.json
  │    │    ├── Decorators/    
  │    │    ├── Filters/    
  │    │    ├── Interfaces/    
  │    │    ├── Tasks/    
  │    │    ├── Utils/    
  │    │    ├── ... (código compartilhado entre os módulos)
  │    └── ... (outros diretórios e arquivos da aplicação)
  ├── test/
  │    ├── ... (arquivos de teste)
  ├── package.json
  ├── .env
  └── ... (outros arquivos de configuração e dependências)
```

## Testes

Os testes automatizados podem ser encontrados no diretório `/test`. Estamos usando o Jest para nossos testes, e você pode executá-los usando o seguinte comando:
```
npm test
# ou
yarn test
```

## Validações com Validator

Utilizamos a biblioteca Validator.js para validar dados de entrada. Certifique-se de verificar os arquivos de DTO (Data Transfer Object) em cada módulo e usar as validações apropriadas.

## Configuração do Prisma

O arquivo de configuração do Prisma está localizado em `prisma/schema.prisma`. Você pode personalizar este arquivo para atender às suas necessidades específicas do banco de dados.

## Studio Prisma

Você pode usar o Prisma Studio para visualizar e modificar seus dados diretamente do banco de dados. Para abrir o Prisma Studio, execute o seguinte comando:
```
npx prisma studio
# ou
yarn prisma studio
```
