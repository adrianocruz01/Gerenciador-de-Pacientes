import fastify from 'fastify';
import fastifyMulter from 'fastify-multer';
import path from 'path';
import fs from 'fs';
import cors from '@fastify/cors'

const app = fastify();
const upload = fastifyMulter({ dest: './pdfs/' });

app.register(upload.contentParser);
app.register(cors, {
  origin: '*',
  methods: ['POST'],
})

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
