import { Book } from '../books/book';
import { BooksService } from '../books/books.service';
import { NewBookInput } from '../books/dto/newBook.input';
export declare class BooksResolver {
    private bookService;
    constructor(bookService: BooksService);
    books(): Promise<Book[]>;
    getBook(id: number): Promise<Book>;
    addBook(newBook: NewBookInput): Promise<Book>;
    removeBook(id: number): Promise<boolean>;
}
