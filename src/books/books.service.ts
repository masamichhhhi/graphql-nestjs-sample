import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Book } from './book';
import { NewBookInput } from './dto/newBook.input';

const books = [
  {
    id: 1,
    title: 'test 1',
    author: 'Joe',
    price: 1000,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'test 2',
    author: 'Maria',
    price: 2000,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'test 3',
    author: 'Smith',
    price: 3000,
    createdAt: new Date(),
  },
] as Book[];

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  findOneById(id: number): Promise<Book> {
    return this.prisma.book.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: NewBookInput): Promise<Book> {
    const book = await this.prisma.book.create({
      data: {
        ...data,
      },
    });
    return book;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.prisma.book.delete({
      where: {
        id: id,
      },
    });
    return !!result;
  }
}
