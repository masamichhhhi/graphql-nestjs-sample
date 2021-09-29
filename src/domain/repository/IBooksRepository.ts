import { Book } from 'src/domain/model/book';
import { CreateBookDto } from './dto';

export interface IBooksRepository {
  // find(id: number): Promise<Book>;
  // findAll(): Promise<Book[]>;
  create(request: CreateBookDto): Promise<Book>;
}
