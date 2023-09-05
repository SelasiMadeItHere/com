const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token invalid' });
    }

    req.user = decoded;
    next();
  });
}

app.get('/protected', verifyToken, (req, res) => {
  // Access authorized data using req.user
  res.json({ message: 'Protected data accessed', user: req.user });
});
