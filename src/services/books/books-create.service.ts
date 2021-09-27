import { Injectable } from '@nestjs/common';
import { Book } from 'src/books/book';
import { PrismaService } from 'src/prisma.service';
import { BaseService } from '../base.service';
import { BooksCreateRequest, BooksCreateResponse } from './books-create.dto';

@Injectable()
export class BooksCreateService extends BaseService {
  constructor(private prisma: PrismaService) {
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
    const book = this.prisma.book.create({
      data: {
        ...request,
      },
    });
    return book;
  }
}
