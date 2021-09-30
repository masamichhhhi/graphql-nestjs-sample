import { BooksRepositoryImpl } from './BooksRepositoryImpl';
export declare const repositories: {
    provide: string;
    useClass: typeof BooksRepositoryImpl;
}[];
