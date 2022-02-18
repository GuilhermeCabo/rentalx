import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  public handle(request: Request, response: Response): Response {
    const specification = this.createSpecificationUseCase.execute(request.body);

    return response.status(201).json(specification);
  }
}

export { CreateSpecificationController };
