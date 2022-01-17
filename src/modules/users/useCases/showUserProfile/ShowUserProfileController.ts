import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const showById = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(showById).send();
    } catch (err) {
      return response.status(err.statusCode).json({ error: err.message }).send();
    }
  }
}

export { ShowUserProfileController };
