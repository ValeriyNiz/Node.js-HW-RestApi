const getActual = async (req, res) => {
  const { email } = req.user;
  res.json({
    email,
  });
};
module.exports = getActual;