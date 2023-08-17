const User = require('../models/user-model');

const createUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    if (!body) {
      return res.status(400).json({
        success: false,
        error: 'You must provide a user',
      });
    }

    const user = new User(body);

    try {
      await user.save();
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created!',
      });
    } catch (err) {
      return res.status(400).json({
        err,
        message: 'User not created!',
      });
    }
  } catch (err) {
    return res.status(500).json({
      err,
      message: 'Internal server error',
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: 'You must provide a body to update',
      });
    }

    let user;
    try {
      user = await User.findOne({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({
          message: 'User not found!',
        });
      }

      user.salutation = body.salutation;
      user.firstName = body.firstName;
      user.lastName = body.lastName;
      user.dateOfBirth = body.dateOfBirth;
      user.gender = body.gender;
      user.email = body.email;

      try {
        await user.save();
        return res.status(200).json({
          success: true,
          id: user._id,
          message: 'User updated!',
        });
      } catch (err) {
        return res.status(400).json({
          err,
          message: 'User not updated!',
        });
      }
    } catch (err) {
      return res.status(500).json({
        err,
        message: 'Internal server error',
      });
    }
  } catch (err) {
    return res.status(500).json({
      err,
      message: 'Internal server error',
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ data: user });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err,
    });
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  getUserById,
};
