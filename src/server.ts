import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fastifyMulter from 'fastify-multer';
import path from 'path';
import fs from 'fs';
import cors from '@fastify/cors'
import pg, { QueryResult } from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET || '123456';

const { Pool } = pg;

const app = fastify();
const upload = fastifyMulter({ dest: './pdfs/' });

app.register(upload.contentParser);
app.register(cors, {
  origin: '*',
  methods: ['POST'],
});

function generateToken(userId: number) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
}

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'authdb',
  password: '123456789',
  port: 5432,
});

pool.connect();

interface User {
  id: number;
  cpf: string;
  password: any;
}

app.route({
  method: 'POST',
  url: '/login',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { cpf, password } = request.body as { cpf: string, password: string };
      console.log({cpf, password})


      const cpfUnformatted = cpf.replace(/[^\d]/g, ""); // Remove pontos e traços
      const result = await pool.query('SELECT * FROM users WHERE cpf = $1', [cpfUnformatted]);

      // const result: QueryResult<User> = await pool.query('SELECT * FROM users WHERE cpf = $1', [cpfUnformatted]);
      console.log({result})
   
      if (result.rows.length === 0) {
        return reply.code(401).send({ error: 'Credenciais inválidas' });
      }

      const user = result.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password_hash);
      console.log({passwordMatch})


      if (!passwordMatch) {
        return reply.code(401).send({ error: 'Credenciais inválidas' });
      }

      const token = generateToken(user.id);
      reply.send({ token });
    } catch (error) {
      console.error('Erro na autenticação:', error);
      reply.code(500).send('Erro no servidor');
    }
  },
});

app.route({
  method: 'POST',
  url: '/upload',
  preHandler: upload.single('pdf'),
  handler: async function handler(request, reply) {
    // @ts-ignore
    const uploadedFile = request.file;

    if (!uploadedFile) {
      reply.code(400).send({ error: 'No file uploaded' });
      return;
    }

    // Move the uploaded file to the /pdfs directory without renaming it
    const originalFilePath = uploadedFile.path;
    const pdfFilePath = path.join('./pdfs/', uploadedFile.originalname);

    try {
      fs.renameSync(originalFilePath, pdfFilePath);
      reply.code(204).send()
    } catch (error) {
      console.error('Error moving file:', error);
      reply.code(500).send({ error: 'Internal Server Error' });
    }
  },
});

// Cria user no banco
// app.route({
//   method: 'POST',
//   url: '/create-user',
//   handler: async (request, reply) => {
//     try {
//       const { cpf, password } = request.body as { cpf: string, password: string };

//       // Hash da senha
//       const salt = await bcrypt.genSalt(10);
//       const passwordHash = await bcrypt.hash(password, salt);

//       // Insere o usuário no banco de dados
//       await pool.query('INSERT INTO users (cpf, password_hash) VALUES ($1, $2)', [cpf, passwordHash]);
//       reply.code(200).send({ message: 'Usuário criado com sucesso!' });
//     } catch (error) {
//       console.error('Erro ao criar usuário:', error);
//       reply.code(500).send('Erro no servidor');
//     }
//   },

// curl -X POST http://localhost:3333/create-user \
//   -H 'Content-Type: application/json' \
//   -d '{"cpf": "05319720114", "password": "123456789"}'
// });



app
  .listen({
    host: '0.0.0.0',
    port: 3333,
  })
  .then(() => {
    console.log(`Server is running on port 3333 🚀`);
  })
  .catch(console.error);
