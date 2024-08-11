import { NextApiRequest, NextApiResponse } from "next";
import tokenHelper from "../helpers/tokenHelper";

const bearer = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const header = req.headers.authorization;

    if (!header?.startsWith("Bearer")) {
      return res.status(405).json("unauthorized");
    }

    const token = header?.split(" ")[1];

    try {
      if (tokenHelper.decodeToken(token)) {
        console.log("authorized");
        return handler(req, res);
      }
    } catch (err) {
      return res.status(405).json("unauthorized");
    }
  };
};

export default bearer;
