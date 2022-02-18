import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);

    return category;
  }

  public async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  public update() {}

  public delete(id: string) {}

  public async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
