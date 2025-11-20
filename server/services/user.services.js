import TempUser from "../models/tempuser.model.js";
import User from "../models/user.model.js";

export const RegisterManualUser = async ({
  name,
  email,
  password,
  otp,
  otpExpiry,
}) => {
  if (!name || !email || !password || !otp || !otpExpiry) {
    throw new Error("All fields are required for manual registration.");
  }

  const tempuser = await TempUser.create({
    name,
    email,
    password,
    otp,
    otpExpiry,
  });

  return tempuser;
};

export const VerifyuserOTP = async ({ email, otp }) => {
  if (!email || !otp) {
    throw new Error("All fields are required for manual registration.");
  }

  const tempuser = await TempUser.findOne({ email });

  if (!tempuser) {
    throw new Error("User not found.");
  }

  if (tempuser.otp !== otp) {
    throw new Error("Invalid OTP.");
  }

  if (tempuser.otpExpiry < Date.now()) {
    throw new Error("OTP has expired.");
  }

  const user = await User.create({
    name: tempuser.name,
    email: tempuser.email,
    password: tempuser.password,
  });

  await tempuser.deleteOne();

  return user;
};
