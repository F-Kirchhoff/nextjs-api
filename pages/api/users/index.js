import { promises } from "fs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await promises.readFile("db/users.json", "utf-8");
    const users = JSON.parse(data);
    res.status(200).json(users);
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
