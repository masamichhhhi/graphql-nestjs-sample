import { Inject, Injectable } from '@nestjs/common';
import { Book } from 'src/books/book';
import { IBooksRepository } from 'src/domain/repository/IBooksRepository';
import { PrismaService } from 'src/prisma.service';
import { BaseService } from '../base.service';
import { BooksCreateRequest, BooksCreateResponse } from './books-create.dto';

@Injectable()
export class BooksCreateService extends BaseService {
  constructor(
    @Inject('BooksRepositoryImpl')
    private booksRepository: IBooksRepository,
  ) {
    super();
  }

  // async create(data: NewBookInput): Promise<Book> {
  //   const book = await this.prisma.book.create({
  //     data: {
  //       ...data,
  //     },
  //   });
  //   return book;
  // }

  async handle(request: BooksCreateRequest): Promise<Book> {
    const book = await this.booksRepository.create(request);
    return book;
  }
}
