import { BooksRepositoryImpl } from './BooksRepositoryImpl';

export const repositories = [
  {
    provide: 'IBooksRepository',
    useClass: BooksRepositoryImpl,
  },
];
