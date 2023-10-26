import { CUstomerRepository } from "../repositories/CustomerRepository";

export class CustomerService {
  
  private customerRepository: CUstomerRepository;

  constructor() {
    this.customerRepository = new CUstomerRepository();
  }

  async create(name: string = "customer", idTelegram: string) {
    const find = await this.customerRepository.findCustomer(idTelegram);

    if (find) {
      return;
    }

    const res = await this.customerRepository.create(name, idTelegram);

    return res;
  }

  async getAll() {
    const res = await this.customerRepository.getAll();

    return res;
  }
}
