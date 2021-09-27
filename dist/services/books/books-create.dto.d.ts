import { BaseResponse } from '../base.dto';
export declare class BooksCreateRequest {
    title: string;
    price: number;
    author: string;
}
export declare class BooksCreateResponse extends BaseResponse {
}
