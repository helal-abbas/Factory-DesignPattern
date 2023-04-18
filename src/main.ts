import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  // const globalPrefix = 'api/ms-apps';
  // app.setGlobalPrefix(globalPrefix);
  // app.enableCors({
  //   allowedHeaders: '*',
  //   credentials: true,
  //   origin: [
  //   'http://192.168.0.12:4200',
  //   ],
  //   methods: ["GET", "POST"],
  //   });

  await app.listen(4201);
}
bootstrap();
