import { promises } from "fs";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const data = await promises.readFile("db/users.json", "utf-8");
    const users = JSON.parse(data);

    const { userId } = req.query;
    const updatedUsers = users.filter((user) => user._id !== userId);

    promises.writeFile("db/users.json", JSON.stringify(updatedUsers, null, 4));
    res.json({ message: "User deleted!" });
    return;
  }
  res.status(403).send("Error: request method not allowed.");
}
