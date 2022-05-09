import { users } from "../../../db/users";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
