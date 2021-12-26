import fs from "fs";
import jwt from "jsonwebtoken";
import secret from "../../config"

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, pass } = req.body;

    // const content = fs.readFileSync("./users/users.json");
    // let users = JSON.parse(content);
    // let candid = users.users.find((item, i) => {
    //   return item.email == email;
    // });
    let candid = {
      user_id: "1",
      email: "test@gmail.com",
      name: "John",
      role: "Guest",
    };

    if (email == "test@gmail.com" && pass == 1234) {
      // creating JWT

      const token = jwt.sign(
        {
          ...candid
        },
        secret,
        {
          expiresIn: "50m",
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
