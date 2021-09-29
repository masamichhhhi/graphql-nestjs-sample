import { Book } from 'src/domain/model/book';
import { CreateBookDto } from './dto';
export interface IBooksRepository {
    create(request: CreateBookDto): Promise<Book>;
}
