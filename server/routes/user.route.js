import { Router } from "express";
import { RegisterUser, VerifyOTP } from "../controllers/user.controller.js";
import { body } from "express-validator";
import validateRequest from "../middlewares/validate.middleware.js";

const UserRouter = Router();

UserRouter.route("/register").post(
  [
    body("name")
      .isString()
      .isLength({ min: 3 })
      .notEmpty()
      .withMessage("Name is required"),
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password")
      .isString()
      .isLength({ min: 6 })
      .notEmpty()
      .withMessage("Password is required"),
  ],
  validateRequest,
  RegisterUser
);

UserRouter.post(
  "/verify",
  [
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("otp").isString().notEmpty().withMessage("OTP is required"),
  ],
  validateRequest,
  VerifyOTP
);

export default UserRouter;
