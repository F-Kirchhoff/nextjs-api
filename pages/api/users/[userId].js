import { users } from "../../../db/users";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { userId } = req.query;
    const user = users.find((user) => user._id === userId);
    user ? res.json(user) : res.status(400).send({ message: "User not found" });
  }
  res.status(403).send("Error: request method not allowed.");
}
