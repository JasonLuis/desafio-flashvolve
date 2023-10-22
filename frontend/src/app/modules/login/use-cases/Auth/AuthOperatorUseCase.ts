import { IOperatorService } from '../../services/OperatorService';
import { AuthOperatorDTO } from './AuthOperatorDTO';
import { Result } from '~/app/core/base/Result';
import { left, right } from '~/app/core/base/Either';
import { UseCase } from '~/app/core/base/UseCase';
import { CallError } from '~/shared/types/ErrorType';
import { HttpHelper } from '~/shared/helper/HttpHelper';
import { AppError } from '~/app/core/base/AppError';

export class AuthOperatorUseCase
  implements UseCase<AuthOperatorDTO.Request, AuthOperatorDTO.Response>
{
  constructor(private operatorService: IOperatorService) {
    this.operatorService = operatorService;
  }

  public async execute(
    dto: AuthOperatorDTO.Request
  ): Promise<AuthOperatorDTO.Response> {
    try {
      const res = await this.operatorService.authOPerator(dto);

      return right(Result.ok(res));
    } catch (error) {
      if (HttpHelper.isDataNotFoundError(error as CallError)) {
        return left(new AppError.DataNotFound(error));
      } else if (HttpHelper.isBadRequestError(error as CallError)) {
        return left(new AppError.BadRequestError(error));
      }
      return left(new AppError.UnexpectedError(error));
    }
  }
}
