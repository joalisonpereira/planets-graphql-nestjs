import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePlanetInput {
  @Field()
  name: string;

  @Field()
  description: string;
}

@ArgsType()
export class CreatePlanetDto {
  @Field()
  data: CreatePlanetInput;
}
