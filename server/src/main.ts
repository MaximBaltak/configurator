import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    origin:'*',
    allowedHeaders: ['Content-Type']
  })
  await app.listen(8000);
}
bootstrap().then(() => console.log('server start')).catch(e => console.log(e));
