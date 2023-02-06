import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3105
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api")
  app.enableCors({
    origin:'*'
  })
  await app.listen(PORT);
}
bootstrap();
