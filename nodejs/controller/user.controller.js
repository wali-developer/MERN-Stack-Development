const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup controller function
module.exports.signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation user fields
    if (!name || !email || !password) {
      return res.status(422).json({
        error: "All fields are required. name, email, password",
      });
    }

    // check the user if already exist
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(422).json({
        error: "User already exist, please try a new email address.",
      });
    }

    // Store the hash of provided password in DB.
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);

    // Insert the user record in DB
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    // Return the response
    return res.status(201).json({
      message: "User account created successfully!",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to signup",
      error: error.message,
    });
  }
};

// Login controller function
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the payload / body
    if (!email || !password) {
      return res.status(422).json({
        error: "Email and password fields are required!",
      });
    }

    // Find the user in DB with the provided email
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(422).json({
        error: "Invalid credientials!",
      });
    }

    // Check the user pasword in DB.
    const matchPassword = await bcrypt.compare(password, existUser.password);
    if (!matchPassword) {
      return res.status(422).json({
        error: "Invalid credientials!",
      });
    }

    //  Create a token for the user to login.
    const token = jwt.sign(
      { id: existUser._id, name: existUser.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Return the token and other user data
    return res.status(201).json({
      message: "You are successfully login to the system.",
      user: {
        name: existUser.name,
        email: existUser.email,
        token,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to login",
      error: error.message,
    });
  }
};
