import { Book } from 'src/books/book';
import { IBooksRepository } from 'src/domain/repository/IBooksRepository';
import { BaseService } from '../base.service';
import { BooksCreateRequest } from './books-create.dto';
export declare class BooksCreateService extends BaseService {
    private booksRepository;
    constructor(booksRepository: IBooksRepository);
    handle(request: BooksCreateRequest): Promise<Book>;
}
