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


     const user = await User.findOne({ _id: req.params.id });

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
    };

    const deleteUser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: `User not found`,
      });
    }
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: `User not found`,
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users.length) {
      return res.status(404).json({
        success: false,
        error: `User not found`,
      });
    }

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
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
