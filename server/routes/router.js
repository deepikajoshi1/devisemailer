const express = require('express');

const UserController = require('../controllers/user-controller');

const router = express.Router();

router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.get('/user/:id', UserController.getUserById);
router.get('/users', UserController.getUsers);

module.exports = router;
