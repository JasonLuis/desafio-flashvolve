import { prisma } from "../database/prisma";
import { Operator } from "../interfaces/OperatorsInterface";

export class OperatorsRepository {
  async create({ name, login, password }: Operator.Create) {
    const result = await prisma.operators.create({
      data: {
        name,
        login,
        password,
      },
    });

    return result;
  }

  async findOperatorByLogin(login: string) {
    const result = await prisma.operators.findUnique({
      where: {
        login,
      },
    });
    return result;
  }
}
