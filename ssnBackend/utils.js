import jwt from "jsonwebtoken";
import config from "./config.js";
const getToken = (user) => {
  /* console.log("the value of the user====>getToken", user); */
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      type: user.type,
      number: user.number,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  /* console.log("the value of the token", token); */

  if (token) {
    const onlyToken = token.slice(6, token.length);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          msg: "Invalid Token",
        });
      }
      req.user = decode;
      /* console.log(decode, "the value of the decode"); */
      next();
      return;
    });
  } else {
    return res.status(401).send({
      msg: "Token is not supplied",
    });
  }
};

/* to check whether that person is not  */
const isAdmin = (req, res, next) => {
  console.log(req.user);
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ message: "Admin token is not valid" });
};
export { getToken, isAdmin, isAuth };
