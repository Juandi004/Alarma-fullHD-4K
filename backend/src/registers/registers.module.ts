import { Module } from '@nestjs/common';
import { RegistersService } from './registers.service';
import { RegistersController } from './registers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RegistersController],
  providers: [RegistersService],
  imports: [PrismaModule]
})
export class RegistersModule {}
