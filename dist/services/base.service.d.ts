import { BaseRequest, BaseResponse } from './base.dto';
export declare abstract class BaseService {
    abstract handle(request: BaseRequest): BaseResponse;
}
