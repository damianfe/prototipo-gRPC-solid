import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'your_package_name', // Nombre del paquete en el .proto
      protoPath: join(__dirname, 'shared/protos/your_proto_file.proto'),
    },
  });

  await app.listen();
  console.log('🚀 gRPC microservice is running');
}

bootstrap();
