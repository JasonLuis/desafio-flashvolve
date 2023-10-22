import { OperatorServiceMock } from '../../services/OperatorServiceMock';
import { OperatorService } from '../../services/OperatorService';
import { AuthOperatorUseCase } from './AuthOperatorUseCase';
import { HttpAdapter } from '~/app/core/adapter/HttpAdapter';

const MOCK = process.env.MOCK === 'true';

const httpAdapter = new HttpAdapter();
const operatorService = MOCK
  ? new OperatorServiceMock()
  : new OperatorService(httpAdapter);

const authOperatorUseCase = new AuthOperatorUseCase(operatorService);

export { authOperatorUseCase };
