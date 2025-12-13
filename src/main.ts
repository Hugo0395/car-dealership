import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //permite pasar todos los datos pero solo los que esten en el dto sin lanzar error
      forbidNonWhitelisted: true, //lanza un error si se pasan datos que no estan en el dto
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
main().catch((err) => {
  console.error('Error starting server', err);
  process.exit(1);
});
