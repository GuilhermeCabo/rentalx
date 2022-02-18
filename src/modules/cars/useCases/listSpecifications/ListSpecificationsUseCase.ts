import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  public execute() {
    const specifications = this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
