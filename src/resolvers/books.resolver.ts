import { NotFoundException } from '@nestjs/common';
import { Args, Int, Resolver, Query, Mutation } from '@nestjs/graphql';
import { BooksCreateRequest } from 'src/services/books/books-create.dto';
import { BooksCreateService } from 'src/services/books/books-create.service';
import { Book } from '../books/book';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(private bookCreateService: BooksCreateService) {}

  @Query((returns) => [Book])
  books(): Promise<Book[]> {
    return Promise.resolve([]);
  }

  // @Query((returns) => Book)
  // async getBook(@Args({ name: 'id', type: () => Int }) id: number) {
  //   const book = await this.bookService.findOneById(id);
  //   if (!book) {
  //     throw new NotFoundException(id);
  //   }

  //   return book;
  // }

  @Mutation((returns) => Book)
  addBook(@Args('newBook') newBook: BooksCreateRequest): Promise<Book> {
    return this.bookCreateService.handle(newBook);
  }

  // @Mutation((returns) => Boolean)
  // async removeBook(@Args({ name: 'id', type: () => Int }) id: number) {
  //   return this.bookService.remove(id);
  // }
}
