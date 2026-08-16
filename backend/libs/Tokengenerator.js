const jwt = require('jsonwebtoken');

require('dotenv').config();


const generateToken = async (user, res) => {
  try {
    const secretKey = process.env.JWT_SECRET || process.env.SecretKey || "default_jwt_secret_key";

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      secretKey,
      { expiresIn: '7d' }
    );

    res.cookie("Inventorymanagmentsystem", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    });
    

    return token; 
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Failed to generate token");
  }
};

module.exports=generateToken;
