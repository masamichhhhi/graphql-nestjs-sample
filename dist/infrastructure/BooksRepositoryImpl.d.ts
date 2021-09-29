import { Book } from 'src/domain/model/book';
import { CreateBookDto } from 'src/domain/repository/dto';
import { IBooksRepository } from 'src/domain/repository/IBooksRepository';
import { PrismaService } from 'src/prisma.service';
export declare class BooksRepositoryImpl implements IBooksRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(request: CreateBookDto): Promise<Book>;
}
