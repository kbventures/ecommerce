
import express, { Application, Request, Response, NextFunction } from "express";

// controller functions
const { signupUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// //login route
 router.post("/login", loginUser);

// //signup route
router.post("/signup", signupUser);


router.get("/", (req, res) => {
  return res.status(200).send("hello from server")
})
module.exports = router;