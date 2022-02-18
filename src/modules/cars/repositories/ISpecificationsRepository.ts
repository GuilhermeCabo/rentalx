import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  create({ description, name }: ICreateSpecificationDTO): Specification;
  list(): Specification[];
  find(id: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
