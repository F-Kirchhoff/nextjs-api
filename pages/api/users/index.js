import { users } from "../../../db/users";

export default function handler(req, res) {
  if (req.method === "GET") {
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
