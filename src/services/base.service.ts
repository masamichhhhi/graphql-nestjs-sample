import { Injectable, Logger } from '@nestjs/common';
import { BaseRequest, BaseResponse } from './base.dto';

@Injectable()
export abstract class BaseService {
  abstract handle(request: BaseRequest): BaseResponse;
}
