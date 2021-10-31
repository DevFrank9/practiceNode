import express from "express";

const PORT = 4000;
const app = express();

const routerLogger = (req, res, next) => {
  console.log(`PATH ${req.path}`);
  next();
};
const methodLogger = (req, res, next) => {
  console.log(`METHOD ${req.method}`);
  next();
};
const handleHome = (req, res) => {
  console.log("I will respond");
  return res.send("hello!");
};
const login = (req, res) => {
  return res.send("Log in");
};
app.use(methodLogger, routerLogger);
app.get("/", handleHome);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
