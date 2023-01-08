import { Category } from "../model/Category";

// DTO => Data transfer object

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
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
}

export { CategoriesRepository };
