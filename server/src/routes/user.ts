import express from 'express';

// controller functions
// const { signupUser, loginUser } = require("../controllers/userController");
import { signupUser, loginUser } from '../controllers/userController';

export const router = express.Router();

// //login route
router.post('/login', loginUser);

// //signup route
router.post('/signup', signupUser);

router.get('/', (req, res) => res.status(200).send('hello from server'));
