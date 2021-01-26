const { Router } = require('express');
const User = require('../models/user');
const router = Router();

// The routers

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/profile', (req, res, next) => {
  res.render('profile');
});

router.get('/main', (req, res, next) => {
  res.render('main');
});

router.get('/private', (req, res, next) => {
  res.render('private');
});

router.get('/profile/edit', (req, res, next) => {
  res.render('edit-profile');
});

router.post('/profile/edit', (req, res, next) => {
  const data = req.body;
  const user = req.user;
  User.findOne(user)
    .then((user) => {
      user.name = data.name;
      return user.save();
    })
    .then((user) => res.render('profile', { user }))
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
