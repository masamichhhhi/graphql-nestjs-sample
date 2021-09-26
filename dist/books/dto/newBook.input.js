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
exports.NewBookInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let NewBookInput = class NewBookInput {
};
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], NewBookInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)((type) => graphql_1.Int),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(9999),
    __metadata("design:type", Number)
], NewBookInput.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], NewBookInput.prototype, "author", void 0);
NewBookInput = __decorate([
    (0, graphql_1.InputType)()
], NewBookInput);
exports.NewBookInput = NewBookInput;
//# sourceMappingURL=newBook.input.js.map