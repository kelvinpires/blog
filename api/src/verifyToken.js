const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return res.status(403).json({ message: "Token is not valid." });

      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}
module.exports = verifyToken;
