import { promises } from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = await promises.readFile("db/users.json", "utf-8");
    const users = JSON.parse(data);
    const newUser = req.body;

    const updatedUsers = [...users, newUser];

    promises.writeFile("db/users.json", JSON.stringify(updatedUsers, null, 4));
    res.json({ message: "New user added!" });
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
