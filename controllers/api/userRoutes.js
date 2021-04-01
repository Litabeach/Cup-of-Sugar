const router = require('express').Router();
const { User } = require('../../models');

//Signup 
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.name = userData.name;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

//Login
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      } 
      const validPassword = await userData.checkPassword(req.body.password);
      console.log(validPassword);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      
      }
  console.log(userData);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.name = userData.name;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      });
      res.render('navigation', {
        loggedIn: req.session.logged_in
    });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //Logout
  //redirect user to the homepage
  router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
      console.log('DESTROY!');
      req.session.destroy(() => {
        res.status(204).end();
        
        //present a snackbar/alert stating "You have logged out"
      });
      console.log('You are now logged out!');
      res.render('navigation');
    } else {
      res.status(404).end();
    }
  });

  module.exports = router;