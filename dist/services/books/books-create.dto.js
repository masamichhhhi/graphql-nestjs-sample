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
exports.BooksCreateResponse = exports.BooksCreateRequest = void 0;
const base_dto_1 = require("../base.dto");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let BooksCreateRequest = class BooksCreateRequest {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], BooksCreateRequest.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(9999),
    __metadata("design:type", Number)
], BooksCreateRequest.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], BooksCreateRequest.prototype, "author", void 0);
BooksCreateRequest = __decorate([
    (0, graphql_1.InputType)()
], BooksCreateRequest);
exports.BooksCreateRequest = BooksCreateRequest;
class BooksCreateResponse extends base_dto_1.BaseResponse {
}
exports.BooksCreateResponse = BooksCreateResponse;
//# sourceMappingURL=books-create.dto.js.map