import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  constructor() {
    this.categories = [];
  }

  private categories: Category[];

  createCategory({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    console.log(this.categories);
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(
      (category) => category.name === name
    )!;

    return category;
  }
}

export { CategoriesRepository };
