import { Book } from 'src/books/book';
import { PrismaService } from 'src/prisma.service';
import { BaseService } from '../base.service';
import { BooksCreateRequest } from './books-create.dto';
export declare class BooksCreateService extends BaseService {
    private prisma;
    constructor(prisma: PrismaService);
    handle(request: BooksCreateRequest): Promise<Book>;
}
