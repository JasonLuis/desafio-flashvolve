import { AppError } from '~/app/core/base/AppError';
import { Either } from '~/app/core/base/Either';
import { Result } from '~/app/core/base/Result';

export namespace AuthOperatorDTO {
  export interface Request {
    input: {
      login: string;
      password: string;
    };
  }

  export interface ResponseBody {
    token: string;
    user: {
      name: string;
      login: string;
    };
  }
  export type Response = Either<
    AppError.UnexpectedError | AppError.DataNotFound | AppError.BadRequestError,
    Result<ResponseBody>
  >;
}
