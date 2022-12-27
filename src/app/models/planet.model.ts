import { Field, ObjectType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaModel } from 'src/app/common/types';

@ObjectType()
export class Planet implements PrismaModel<Prisma.PlanetCreateInput> {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
