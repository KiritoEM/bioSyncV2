import userModel from "../models/userModel";
import { Iuser } from "../utils/schemaTypes";

class authServices {
  async createUser(userData: Iuser): Promise<Iuser> {
    try {
      const newUser = new userModel({ ...userData });
      return newUser.save();
    } catch (err) {
      throw Error(err as string);
    }
  }
}

export default new authServices();
