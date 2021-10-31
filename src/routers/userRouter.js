import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => {
  return res.send("Edit user");
};

userRouter.get("/edit", handleEditUser);

export default userRouter;
