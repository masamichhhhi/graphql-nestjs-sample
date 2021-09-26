import { Book } from './book';
import { BooksService } from './books.service';
import { NewBookInput } from './dto/newBook.input';
export declare class BooksResolver {
    private bookService;
    constructor(bookService: BooksService);
    books(): Promise<Book[]>;
    getBook(id: number): Promise<Book>;
    addBook(newBook: NewBookInput): Promise<Book>;
    removeBook(id: number): Promise<boolean>;
}
