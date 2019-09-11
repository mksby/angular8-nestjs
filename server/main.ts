import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.use(helmet());
  app.enableCors();
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100
    }),
  );
  app.use(compression());

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('API')
    .setBasePath('api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(4200);
}
bootstrap();