import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(user).send();
    } catch (err) {
      return response.status(err.statusCode).json({ error: err.message }).send();
    }
  }
}

export { TurnUserAdminController };
