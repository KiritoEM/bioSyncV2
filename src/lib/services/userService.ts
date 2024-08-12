import userModel from "../models/userModel";

class authService {
  async verifyEmail(email: string) {
    try {
      const emailExist = await userModel.findOne({ email });
      return emailExist;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getUserService(id: string) {
    try {
      const user = await userModel.findById(id).populate("posts").exec();
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new authService();
