import express from "express";
const router = express.Router();
import {
  addUser,
  getAllUsers,
  getUser,
  editUser,
  deleteUser
} from "../controler/user-controler.js";
router.post("/add", addUser);

router.get("/all", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
