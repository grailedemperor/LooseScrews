<<<<<<< HEAD

const bcrypt = require('bcrypt')
const passport = require('passport')
const express = require('express');
const router = express.Router();


=======
const bcrypt = require('bcrypt')
const passport = require('passport');
const express = require('express');
const app = express();
const router = express.Router();

>>>>>>> 4f8afbf1fd061983c7c0e089d9d227f4800d2d59
const initializePassport = require('../../config/pass-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []
const app = express();


  app.get('/', checkAuthenticated, (req, res) => {
    res.render('homepage.handlebars', { name: req.user.name })
  })
  
  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.handlebars')
  })
  
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.handlebars')
  })
  
  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
  })
  
  app.delete('/logout', (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err);
      res.redirect('/login');
    });
  });
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
<<<<<<< HEAD

  module.exports = router ;
=======
module.exports = router;
>>>>>>> 4f8afbf1fd061983c7c0e089d9d227f4800d2d59
