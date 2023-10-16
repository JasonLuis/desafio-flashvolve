import { hash } from "bcrypt";
import { Operator } from "../interfaces/OperatorsInterface";
import { OperatorsRepository } from "../repositories/OperatorsRepository";

export class OperatorsService {
    private operatorsRepository: OperatorsRepository;

    constructor () {
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
            password: hashPassword
        });

        return res;
    }
}