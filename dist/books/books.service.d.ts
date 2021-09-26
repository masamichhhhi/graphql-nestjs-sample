import { PrismaService } from 'src/prisma.service';
import { Book } from './book';
import { NewBookInput } from './dto/newBook.input';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Book[]>;
    findOneById(id: number): Promise<Book>;
    create(data: NewBookInput): Promise<Book>;
    remove(id: number): Promise<boolean>;
}
