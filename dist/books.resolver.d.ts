import { Book } from '../books/book';
import { BooksService } from '../books/books.service';
import { NewBookInput } from '../books/dto/newBook.input';
export declare class BooksResolver {
    private bookService;
    constructor(bookService: BooksService);
    addBook(newBook: NewBookInput): Promise<Book>;
}
