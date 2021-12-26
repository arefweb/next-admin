import jwt from "jsonwebtoken";
import secret from "../../config";

export default function handler(req, res) {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    return res.status(200).json({ message: "success", isAuth: true });
  } catch (err) {
    return res.status(401).json({ status: 401 });
  }
}
