import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(403).json({ msg: "Access denied" });
    }
    if (token.startswith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
