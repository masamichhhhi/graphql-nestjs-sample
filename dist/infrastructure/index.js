"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositories = void 0;
const BooksRepositoryImpl_1 = require("./BooksRepositoryImpl");
exports.repositories = [
    {
        provide: 'IBooksRepository',
        useClass: BooksRepositoryImpl_1.BooksRepositoryImpl,
    },
];
//# sourceMappingURL=index.js.map