import { Injectable } from '@nestjs/common';
import { Book } from 'src/domain/model/book';
import { CreateBookDto } from 'src/domain/repository/dto';
import { IBooksRepository } from 'src/domain/repository/IBooksRepository';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksRepositoryImpl implements IBooksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(request: CreateBookDto): Promise<Book> {
    const book = this.prisma.book.create({
      data: {
        ...request,
      },
    });

    return book;
  }
}
