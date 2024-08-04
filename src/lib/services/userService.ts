import userModel from "../models/userModel";

class authService {
  async verifyEmail(email: string) {
    try {
      const emailExist = userModel.findOne({ email });
      return emailExist;
    } catch (err) {
      throw Error(err as string);
    }
  }
}

export default new authService();
