import { NotFoundException } from '@nestjs/common';
import { Args, Int, Resolver, Query, Mutation } from '@nestjs/graphql';
import { Book } from './book';
import { BooksService } from './books.service';
import { NewBookInput } from './dto/newBook.input';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(private bookService: BooksService) {}

  @Query((returns) => [Book])
  books(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Query((returns) => Book)
  async getBook(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.bookService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }

    return book;
  }

  @Mutation((returns) => Book)
  addBook(@Args('newBook') newBook: NewBookInput): Promise<Book> {
    return this.bookService.create(newBook);
  }

  @Mutation((returns) => Boolean)
  async removeBook(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
}
