import { Module } from '@nestjs/common';
// import { FridgesService } from './fridges.service';
// import { FridgesController } from './fridges.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [],
  providers: [],
  imports: [PrismaModule],
})
export class FridgesModule {}
