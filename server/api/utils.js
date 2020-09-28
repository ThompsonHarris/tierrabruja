const validateAuth = () => {
  return (req, res, next) => {
    if (!req.adminAuth) {
      res.redirect('/');
    }
    next();
  };
};

module.exports = validateAuth;
