import mongoose from "mongoose";

const TempUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
  otp: {
    type: String,
    required: true,
  },
  otpExpiry: {
    type: Date,
    required: true,
  },
});

TempUserSchema.index({ otpExpiry: 1 }, { expireAfterSeconds: 0 });

const TempUser = mongoose.model("TempUser", TempUserSchema);

export default TempUser;
