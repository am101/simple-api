const signup = function (req, res) {
  try {
    res.send("This is the Signup Controller");
  } catch (error) {
    res.status(500).json({ status: 500, message: error + "", value: false });
  }
};
const login = function (req, res) {
  try {
    res.send("This is the login Controller");
  } catch (error) {
    res.status(500).json({ status: 500, message: error + "", value: false });
  }
};
const account = function (req, res) {
  try {
    res.send("This is the account Controller");
  } catch (error) {
    res.status(500).json({ status: 500, message: error + "", value: false });
  }
};

module.exports = { signup, login, account };
