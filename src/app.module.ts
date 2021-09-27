import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BooksResolver } from './resolvers/books.resolver';
import { PrismaService } from './prisma.service';
import { services } from './services';
import { resolvers } from './resolvers';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [...resolvers, ...services, PrismaService],
})
export class AppModule {}
