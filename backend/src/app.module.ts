import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RegistersModule } from './registers/registers.module';
import { SensorsModule } from './sensors/sensors.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [PrismaModule, RegistersModule, SensorsModule, RoomsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
