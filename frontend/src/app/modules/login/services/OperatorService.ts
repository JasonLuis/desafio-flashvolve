// eslint-disable-next-line import/default
import { OperatorServiceDTO } from './OperatorServiceDTO';
import { HttpAdapter } from '~/app/core/adapter/HttpAdapter';

type Response<T> = { data: T };

export interface IOperatorService {
  authOPerator(
    dto: OperatorServiceDTO.AuthOpertor.Request
  ): Promise<OperatorServiceDTO.AuthOpertor.Response>;
}

export class OperatorService implements IOperatorService {
  private httpAdapter: HttpAdapter;
  constructor(httpAdapter: HttpAdapter) {
    this.httpAdapter = httpAdapter;
  }

  async authOPerator(
    dto: OperatorServiceDTO.AuthOpertor.Request
  ): Promise<OperatorServiceDTO.AuthOpertor.Response> {
    const url = `${useRuntimeConfig().public.API_BASE_URL}/operator/auth`;
    const body = {
      ...dto.input
    };

    const res: Response<OperatorServiceDTO.AuthOpertor.Response> =
      await this.httpAdapter.post({
        url,
        body
      });

    return res.data;
  }
}
