import { promises } from "fs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await promises.readFile("db/users.json", "utf-8");
    const users = JSON.parse(data);

    const { userId } = req.query;
    const user = users.find((user) => user._id === userId);

    user ? res.json(user) : res.status(400).send({ message: "User not found" });
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
