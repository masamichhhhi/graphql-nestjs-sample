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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const books = [
    {
        id: 1,
        title: 'test 1',
        author: 'Joe',
        price: 1000,
        createdAt: new Date(),
    },
    {
        id: 2,
        title: 'test 2',
        author: 'Maria',
        price: 2000,
        createdAt: new Date(),
    },
    {
        id: 3,
        title: 'test 3',
        author: 'Smith',
        price: 3000,
        createdAt: new Date(),
    },
];
let BooksService = class BooksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.book.findMany();
    }
    findOneById(id) {
        return this.prisma.book.findUnique({
            where: {
                id: id,
            },
        });
    }
    async create(data) {
        const book = await this.prisma.book.create({
            data: Object.assign({}, data),
        });
        return book;
    }
    async remove(id) {
        const result = await this.prisma.book.delete({
            where: {
                id: id,
            },
        });
        return !!result;
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map