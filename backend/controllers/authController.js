const User = require('../models/User');

exports.login = async (req, res) => {
  const { email } = req.body;
  let role = null;
  if (email.endsWith('@faculty.com')) role = 'faculty';
  else if (email.endsWith('@student.com')) role = 'student';
  else return res.status(400).json({ message: 'Invalid email domain' });

  let user = await User.findOne({ email });
  if (!user) user = await User.create({ email, role });

  res.json({ email: user.email, role: user.role, id: user._id });
};
