import { verify } from "jsonwebtoken";

export const getOperatorId = (token: string) => {
  const key = process.env.KEY;

  if (!key) {
    throw new Error("There is no token key");
  }
  const decoded = verify(token, key);
  const id = decoded.sub;
  return id;
};
