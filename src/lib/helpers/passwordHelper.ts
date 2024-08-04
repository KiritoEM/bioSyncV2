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
      throw Error(err as string);
    }
  }
}

export default new passwordHelper(12);
