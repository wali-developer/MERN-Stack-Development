const jwt = require("jsonwebtoken");

const authMiddlware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check the token in request headers
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Unauthorized user, token is missing",
    });
  }

  // Verify user token
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        error: "Unauthorized user, token is invalid",
      });
    }
    req.user = decoded; // user id, name etc
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: "Unauthorized user, token is invalid",
    });
  }
};

module.exports = authMiddlware;
