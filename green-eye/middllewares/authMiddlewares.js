const jwt = require("jsonwebtoken");

const onlyCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    const userData = await jwt.verify(token, process.env.TOKEN_SECRET);
    if (userData.role != "commander") {
      res.status(403).send("shtzchhhhhhhhh.....");
    }

    req.user = userData;
    next();
  } catch (err) {}
};

const onlySoldiersAndCommanders = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    const userData = await jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = userData;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

module.exports = {
  onlyCommanders,
  onlySoldiersAndCommanders,
};
