import userModel from "../models/userModel";

class authService {
  async verifyEmail(email: string) {
    try {
      const emailExist = await userModel.findOne({ email });
      return emailExist;
    } catch (err) {
      throw new Error(err as string);
    }
  }
}

export default new authService();
