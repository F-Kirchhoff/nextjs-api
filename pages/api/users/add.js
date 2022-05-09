import { users } from "../../../db/users";

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    res.json({ message: "New user added!" });
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
