import { NextApiRequest, NextApiResponse } from "next";
import authServices from "../services/authServices";
import tokenHelper from "../helpers/tokenHelper";
import passwordHelper from "../helpers/passwordHelper";
import userService from "../services/userService";

class authController {
  async createUser(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    try {
      const { password, email } = req.body;
      const hashedPassword = await passwordHelper.hashPassword(password);
      const emailExist = userService.verifyEmail(email);

      if (!emailExist) {
        const newUser = await authServices.createUser({
          ...req.body,
          password: hashedPassword,
        });

        if (!newUser) {
          return res
            .status(400)
            .json({ message: "error when creating new user" });
        }

        const token = tokenHelper.generateToken(newUser.id as string);
        return res
          .status(200)
          .json({ message: "user created successfully", newUser, token });
      }
      return res.status(400).json({ message: "Email already in database" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: err });
    }
  }
}

export default new authController();
