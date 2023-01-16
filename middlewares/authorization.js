const jwt = require("jsonwebtoken");

const { User } = require("../models");

const { ServiceError } = require("../helpers");

const { SECRET_KEY } = process.env;

const authorization = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
      throw new ServiceError(401);
    }
    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);
      if (!user || !user.token) {
        throw new ServiceError(401);
      }
      req.user = user;
      next();
    } catch (error) {
      throw new ServiceError(401);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;