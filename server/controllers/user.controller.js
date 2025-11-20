import TempUser from "../models/tempuser.model.js";
import User from "../models/user.model.js";
import {
  RegisterManualUser,
  VerifyuserOTP,
} from "../services/user.services.js";

export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        error:
          "Invalid request parameters in body! Only String values are allowed.",
      });
    }

    const ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!ValidEmail.test(email)) {
      return res.status(406).json({
        message: "Invalid Email Address!",
      });
    }

    const AllowedEmails = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "live.com",
      "icloud.com",
      "mail.com",
    ];

    if (!AllowedEmails.includes(email.split("@")[1])) {
      return res.status(406).json({
        message: "Invalid Email Address!",
      });
    }

    const ifTempuserExists = await TempUser.findOne({ email });

    if (ifTempuserExists) {
      return res.status(202).json({
        error: "A user with the email already exists! Try logging in instead.",
      });
    }

    const ifUserExists = await User.findOne({ email });

    if (ifUserExists) {
      return res.status(400).json({
        error: "A user with the email already exists! Try logging in instead.",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    const otpExpiry = new Date(Date.now() + 1000 * 60 * 5);

    const tempuser = await RegisterManualUser({
      name,
      email,
      password,
      otp,
      otpExpiry,
    });

    res.status(200).json({
      success: true,
      message: "OTP sent to your email address",
      user: tempuser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

export const VerifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (typeof email !== "string" || typeof otp !== "string") {
      return res.status(400).json({
        error:
          "Invalid request parameters in body! Only String values are allowed.",
      });
    }

    const ifUserExists = await User.findOne({ email });
    if (ifUserExists) {
      return res.status(400).json({
        error: "A user with the email already exists! Try logging in instead.",
      });
    }

    const user = await VerifyuserOTP({ email, otp });

    res.status(200).json({
      success: true,
      message: "Account created successfully!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
