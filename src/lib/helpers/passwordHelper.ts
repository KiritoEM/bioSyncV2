import bcrypt from "bcrypt";

class passwordHelper {
  public salt: number;
  constructor(salt: number) {
    this.salt = salt;
  }

  async hashPassword(password: string) {
    try {
      const hashedPassword = bcrypt.hash(password, this.salt);
      return hashedPassword;
    } catch (err) {
      throw new Error(err);
    }
  }

  async comparePassword(password: string, hashedPassword: string) {
    try {
      return bcrypt.compare(password, hashedPassword);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new passwordHelper(12);
