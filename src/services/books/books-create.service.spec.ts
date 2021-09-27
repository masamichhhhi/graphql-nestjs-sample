import { Test, TestingModule } from '@nestjs/testing';
import { BooksCreateService } from './books-create.service';

describe('BooksCreateService', () => {
  let service: BooksCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksCreateService],
    }).compile();

    service = module.get<BooksCreateService>(BooksCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
