import { users } from "../../../../db/users";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const { userId } = req.query;
    const user = users.find((user) => user._id === userId);
    console.log(user);
    if (user) {
      res.json({ message: "User deleted!" });
    } else {
      res.status(400).json({ message: "User not found" });
    }
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
