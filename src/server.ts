import fastify, { FastifyBaseLogger, FastifyInstance, FastifyReply, FastifyRequest, FastifySchema, FastifyTypeProviderDefault, RouteGenericInterface } from 'fastify';
import fastifyMulter from 'fastify-multer';
import path from 'path';
import fs from 'fs';
import cors from '@fastify/cors'
import pg, { QueryResult } from 'pg';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const  JWT_SECRET  = process.env.JWT_SECRET as string;
const { Pool } = pg;
import  'dotenv/config' ;


const app = fastify();
const upload = fastifyMulter({ dest: './pdfs/' });

app.register(upload.contentParser);
app.register(cors, {
  origin: '*',
  methods: ['POST'],
})

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
  password_hash(password: string, password_hash: any): unknown;
  id: number;
  username: string;
  password: any;
}

app.route({
  method: 'POST',
  url: '/login',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { username, password } = request.body as { username: string, password: string };

      const result: QueryResult<User> = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
   
      if (result.rows.length === 0) {
        return reply.code(401).send({ error: 'Credenciais inválidas' });
      }

      const user = result.rows[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

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

app
  .listen({
    host: '0.0.0.0',
    port: 3333,
  })
  .then(() => {
    console.log(`Server is running on port 3333 🚀`);
  })
  .catch(console.error);
