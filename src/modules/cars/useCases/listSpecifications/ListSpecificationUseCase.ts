import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute() {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}

export { ListSpecificationUseCase };
