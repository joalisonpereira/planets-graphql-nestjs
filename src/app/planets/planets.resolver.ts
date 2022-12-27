import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Planet } from 'src/app/models/planet.model';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';
import { PlanetsService } from './planets.service';

@Resolver()
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Query(() => [Planet])
  planets() {
    return this.planetsService.findAll();
  }

  @Mutation(() => Planet)
  planet(@Args() data: CreatePlanetDto) {
    return this.planetsService.create(data.data);
  }

  @Mutation(() => Planet)
  updatePlanet(@Args('id') id: string, @Args() data: UpdatePlanetDto) {
    return this.planetsService.update(id, data.data);
  }

  @Mutation(() => Planet)
  removePlanet(@Args('id') id: string) {
    return this.planetsService.remove(id);
  }
}
