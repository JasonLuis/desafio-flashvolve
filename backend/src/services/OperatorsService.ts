import { compare, hash } from "bcrypt";
import { Operator } from "../interfaces/OperatorsInterface";
import { OperatorsRepository } from "../repositories/OperatorsRepository";
import { sign } from "jsonwebtoken";

export class OperatorsService {
  private operatorsRepository: OperatorsRepository;

  constructor() {
    this.operatorsRepository = new OperatorsRepository();
  }

  async create({ name, login, password }: Operator.Create) {
    const find = await this.operatorsRepository.findOperatorByLogin(login);

    if (find) {
      throw new Error("Operator exist");
    }

    const hashPassword = await hash(password, 10);

    const res = await this.operatorsRepository.create({
      name,
      login,
      password: hashPassword,
    });

    return res;
  }

  async auth(login: string, password: string) {
    const find = await this.operatorsRepository.findOperatorByLogin(login);

    if (!find) {
      throw new Error("Login or password invalid");
    }

    const passwordVerified = await compare(password, find.password);

    if (!passwordVerified) {
      throw new Error("Login or password invalid");
    }

    let key: string | undefined = process.env.KEY;
    if (!key) {
      throw new Error("There is no token key");
    }

    const token = sign({ login }, key, {
      subject: find.id,
      expiresIn: 60 * 15,
    });

    return {
      token,
      user: {
        name: find.name,
        login: find.login,
      },
    };
  }
}
