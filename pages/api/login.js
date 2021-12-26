import fs from "fs";
import jwt from "jsonwebtoken";
import secret from "../../config"

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, pass } = req.body;

    const content = fs.readFileSync("./users/users.json");
    let users = JSON.parse(content);
    let candid = users.users.find((item, i) => {
      return item.email == email;
    });

    if (candid && candid.password == pass) {
      // creating JWT
      const token = jwt.sign(
        {
          user_id: candid.id,
          email: candid.email,
          name: candid.name,
          role: candid.role,
        },
        secret,
        {
          expiresIn: "500m",
        }
      );

      // save candid token
      candid.token = token;

      return res.status(200).json(candid);
    } else {
      return res.status(401).json({ message: "Wrong information!" });
    }
  }
}
