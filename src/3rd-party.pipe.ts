import { PipeTransform, Injectable, UnprocessableEntityException, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class ThirdPartyPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) { }
  transform(value: any, metadata?: any) {
    const { error } = this.schema.validate(value);
    if (error) {
      const err_msg = error.message
      const { _original } = error
      const [details] = error.details
      const { path: [parent, index, child], context } = details
      context.code = 422
      if (parent === "customers") {
        try {
          const { customers } = _original
          const { MiddleRef, EmployeeRespCode, KnowAs } = customers[index]
          const { key } = context
          context.value = { MiddleRef, EmployeeRespCode, KnowAs, errorKeyValue: { key, value: customers[index][key] } }
          context.message = error.message
          throw new UnprocessableEntityException(context);
        } catch (error) {
          context.message = err_msg
          throw new UnprocessableEntityException(context);
        }
      }
      if (parent === "addresses") {
        try {
          const { addresses } = _original
          const { MiddleRef, CustId } = addresses[index]
          const { key } = context
          context.value = { MiddleRef, CustId, errorKeyValue: { key, value: addresses[index][key] } }
          context.message = error.message
          throw new UnprocessableEntityException(context);
        } catch (error) {
          context.message = err_msg
          throw new UnprocessableEntityException(context);
        }
      } else {
        throw new UnprocessableEntityException(`Validation failed: ${error.message}`);
      }
    }
    return value
  }
}
