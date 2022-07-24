import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    //Filter malicious data
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
