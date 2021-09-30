import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma.service';
import { services } from './services';
import { resolvers } from './resolvers';
import { repositories } from './infrastructure';
import { BooksRepositoryImpl } from './infrastructure/BooksRepositoryImpl';
import { BooksCreateService } from './services/books/books-create.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [...resolvers, ...services, ...repositories, PrismaService],
})
export class AppModule {}
