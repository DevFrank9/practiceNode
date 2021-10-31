import express from "express";
import { trending } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
