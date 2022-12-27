import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlanetInput } from './dto/create-planet.dto';
import { UpdatePlanetInput } from './dto/update-planet.dto';

@Injectable()
export class PlanetsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.planet.findMany();
  }

  create(data: CreatePlanetInput) {
    return this.prismaService.planet.create({ data });
  }

  update(id: string, data: UpdatePlanetInput) {
    return this.prismaService.planet.update({ data, where: { id } });
  }

  remove(id: string) {
    return this.prismaService.planet.delete({ where: { id } });
  }
}
