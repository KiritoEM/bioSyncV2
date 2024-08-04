import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

class tokenHelper {
  public secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  generateToken(id: string): string {
    try {
      const payload = { userId: `${id}` };
      const token = jwt.sign(payload, this.secretKey, { expiresIn: "365d" });
      return token;
    } catch (err) {
      throw Error(err as string);
    }
  }
}

export default new tokenHelper(secretKey as string);
