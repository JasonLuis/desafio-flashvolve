import { authOperatorUseCase } from '.';

describe('Use Case: login/AuthOperator', () => {
  beforeAll(() => {});

  test('Auth Operator - Success', async () => {
    const req = {
      input: {
        login: 'jasonluis',
        password: 'teste1234'
      }
    };
    const res = await authOperatorUseCase.execute(req);
    expect(res.isRight()).toBe(true);
    expect(res.value.getValue()).toBeDefined();
  });
});
