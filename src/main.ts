import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//서버 3000포트로 엶
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();