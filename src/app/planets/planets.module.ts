import { Module } from '@nestjs/common';
import { PlanetsResolver } from './planets.resolver';
import { PlanetsService } from './planets.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PlanetsResolver, PlanetsService, PrismaService],
})
export class PlanetsModule {}
