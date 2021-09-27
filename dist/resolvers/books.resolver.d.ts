import { BooksCreateRequest } from 'src/services/books/books-create.dto';
import { BooksCreateService } from 'src/services/books/books-create.service';
import { Book } from '../books/book';
export declare class BooksResolver {
    private bookCreateService;
    constructor(bookCreateService: BooksCreateService);
    books(): Promise<Book[]>;
    addBook(newBook: BooksCreateRequest): Promise<Book>;
}
