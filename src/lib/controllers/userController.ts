import { NextApiResponse } from "next";
import { Req } from "../utils/schemaTypes";
import userService from "../services/userService";

class authController {
  async getUser(req: Req, res: NextApiResponse) {
    try {
      const user = await userService.getUserService(req.user.userId);

      if (!user) {
        return res.status(400).json({ message: "Error when fetching user", user });
      }

      return res
        .status(200)
        .json({ message: "User fetched successfully", user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: err });
    }
  }
}

export default new authController();
