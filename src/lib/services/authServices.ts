import passwordHelper from "../helpers/passwordHelper";
import userModel from "../models/userModel";
import { Iuser } from "../utils/schemaTypes";

class authServices {
  async createUser(userData: Iuser): Promise<Iuser> {
    try {
      const newUser = new userModel({ ...userData });
      return await newUser.save();
    } catch (err) {
      throw new Error(err as string);
    }
  }

  async loginService(data: {
    email: string;
    password: string;
  }): Promise<Iuser | undefined> {
    try {
      const user = await userModel.findOne({ email: data.email });

      if (user) {
        const passwordMatch = await passwordHelper.comparePassword(
          data.password,
          user.password
        );

        if (passwordMatch) {
          return user;
        }
      }
    } catch (err) {
      throw new Error(err as string);
    }
  }
}

export default new authServices();
