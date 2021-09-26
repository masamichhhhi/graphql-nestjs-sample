"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const book_1 = require("./book");
const books_service_1 = require("./books.service");
const newBook_input_1 = require("./dto/newBook.input");
let BooksResolver = class BooksResolver {
    constructor(bookService) {
        this.bookService = bookService;
    }
    books() {
        return this.bookService.findAll();
    }
    async getBook(id) {
        const book = await this.bookService.findOneById(id);
        if (!book) {
            throw new common_1.NotFoundException(id);
        }
        return book;
    }
    addBook(newBook) {
        return this.bookService.create(newBook);
    }
    async removeBook(id) {
        return this.bookService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [book_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "books", null);
__decorate([
    (0, graphql_1.Query)((returns) => book_1.Book),
    __param(0, (0, graphql_1.Args)({ name: 'id', type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "getBook", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => book_1.Book),
    __param(0, (0, graphql_1.Args)('newBook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [newBook_input_1.NewBookInput]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "addBook", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, graphql_1.Args)({ name: 'id', type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BooksResolver.prototype, "removeBook", null);
BooksResolver = __decorate([
    (0, graphql_1.Resolver)((of) => book_1.Book),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksResolver);
exports.BooksResolver = BooksResolver;
//# sourceMappingURL=books.resolver.js.map