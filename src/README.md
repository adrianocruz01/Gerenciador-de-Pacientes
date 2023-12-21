# Projeto NestJS com Prisma e PostgreSQL

Este é um projeto NestJS que utiliza o Prisma como ORM para interagir com um banco de dados PostgreSQL. Você pode facilmente adaptar este projeto para qualquer banco de dados de sua escolha.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Instalação

1. Clone este repositório em sua máquina local:
   ```
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
   ```

2. Instale as dependências:
   ```
   npm install
   # ou
   yarn install
   ```

3. Configuração do banco de dados:
   - Crie um banco de dados PostgreSQL e configure as credenciais no arquivo `.env`.
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
  ├── src/
  │    ├── configuration/
  │    │    ├── prisma/
  │    │    │    └── schema.prisma
  │    │    └── ... (outras configurações)
  │    ├── modules/
  │    │    ├── pessoa/
  │    │    │    ├── pessoa.controller.ts
  │    │    │    ├── pessoa.service.ts
  │    │    │    ├── pessoa.dto.ts
  │    │    │    ├── pessoa.entity.ts
  │    │    │    └── ... (outros arquivos relacionados ao módulo Pessoa)
  │    │    ├── ... (outros módulos que podem crescer)
  │    ├── common/
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

O arquivo de configuração do Prisma está localizado em `src/configuration/prisma/schema.prisma`. Você pode personalizar este arquivo para atender às suas necessidades específicas do banco de dados.

## Studio Prisma

Você pode usar o Prisma Studio para visualizar e modificar seus dados diretamente do banco de dados. Para abrir o Prisma Studio, execute o seguinte comando:
```
npx prisma studio
# ou
yarn prisma studio
```
