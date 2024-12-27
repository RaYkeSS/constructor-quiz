import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export const signJWT = (email: string) => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });
};

export const authenticate = (req: Request) => {
  const authHeader = (req.headers as { authorization?: string }).authorization;

  if (!authHeader) {
    throw new Error("Authorization header is missing");
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    return jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
  } catch (err) {
    throw new Error("Invalid or expired token" + err);
  }
};
