import { NextApiRequest, NextApiResponse } from "next";
import tokenHelper from "../helpers/tokenHelper";
import { Req } from "../utils/schemaTypes";
import { JwtPayload } from "jsonwebtoken";

const bearer = (handler: Function) => {
  return async (req: Req, res: NextApiResponse) => {
    const header = req.headers.authorization;

    if (!header?.startsWith("Bearer")) {
      return res.status(405).json("unauthorized");
    }

    const token = header?.split(" ")[1];

    const decoded = tokenHelper.decodeToken(token);

    if (decoded) {
      req.user = req.user || {};
      req.user.userId = (decoded as JwtPayload).userId;
      console.log("authorized");
      return handler(req, res);
    }
  };
};

export default bearer;
