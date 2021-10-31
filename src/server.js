import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Some one is going to: ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middleware");
};

app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
