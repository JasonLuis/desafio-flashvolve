import { Operator } from '../models/Operator';

export namespace OperatorServiceDTO {
  export namespace CreateOpertator {
    export interface Response extends Operator {}
  }

  export namespace AuthOpertor {
    export interface Request {
      input: {
        login: string;
        password: string;
      };
    }

    export interface Response {
      token: string;
      user: {
        name: string;
        login: string;
      };
    }
  }
}
