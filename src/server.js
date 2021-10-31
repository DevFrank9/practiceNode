import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  console.log("I will respond");
  return res.send("hello!");
};
const login = (req, res) => {
  return res.send("Log in");
};
app.get("/", handleHome);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
