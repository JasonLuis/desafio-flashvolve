import { IOperatorService } from './OperatorService';
import { OperatorServiceDTO } from './OperatorServiceDTO';
import { Helper } from '~/shared/helper/Helper';

export class OperatorServiceMock implements IOperatorService {
  async authOPerator(
    dto: OperatorServiceDTO.AuthOpertor.Request
  ): Promise<OperatorServiceDTO.AuthOpertor.Response> {
    const body: OperatorServiceDTO.AuthOpertor.Response = {
      token: 'kdfjsdjkhfsjdhf',
      user: {
        login: 'teste.teste',
        name: 'teste'
      }
    };

    return await new Promise((resolve, reject) => {
      if (Helper.isNotDefined(dto.input)) {
        return reject(new Error('is empty!'));
      }
      try {
        setTimeout(() => resolve(body), 10);
      } catch (err) {
        return reject(err);
      }
    });
  }
}
