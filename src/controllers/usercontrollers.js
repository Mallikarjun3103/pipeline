// Sample data
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

exports.getUsers = (req, res) => {
  res.status(200).json(users);
};

exports.createUser = (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
};
