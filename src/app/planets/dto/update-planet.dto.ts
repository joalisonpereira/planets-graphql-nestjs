import { ArgsType, Field, InputType, PartialType } from '@nestjs/graphql';
import { CreatePlanetInput } from './create-planet.dto';

@InputType()
export class UpdatePlanetInput extends PartialType(CreatePlanetInput) {}

@ArgsType()
export class UpdatePlanetDto {
  @Field()
  data: UpdatePlanetInput;
}
