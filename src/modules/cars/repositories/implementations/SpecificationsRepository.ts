import { Specifications } from "../../model/Specifications";
import {
  ICreateSpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specifications[];

  private static INSTANCE: ISpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new SpecificationsRepository();
    }
    return this.INSTANCE;
  }

  create({ description, name }: ICreateSpecificationsDTO): void {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specifications | null {
    const specification = this.specifications.find(
      (specification) => specification.name == name
    );
    return specification ? specification : null;
  }

  list(): Specifications[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
