import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [PrismaModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
