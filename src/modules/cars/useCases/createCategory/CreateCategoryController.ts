import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const category = await this.createCategoryUseCase.execute(request.body);

    return response.status(201).json(category);
  }
}

export { CreateCategoryController };
