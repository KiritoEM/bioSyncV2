import jwt from "jsonwebtoken";

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

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
      throw new Error(err);
    }
  }

  decodeToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.secretKey);
      return decoded;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new tokenHelper(secretKey as string);
