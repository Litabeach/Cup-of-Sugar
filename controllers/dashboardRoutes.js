const router = require('express').Router();
const { Ask_Give, User } = require('../models');
const withAuth = require('../utils/auth');


//render dashboard with all the users asks and gives
router.get('/', withAuth, async (req, res) => {
  const user = req.session.user_id;
  try {
    const askgiveData = await Ask_Give.findAll({
      include: [
        {
          model: User,
          attributes: ["name"]
        },
      ],
      attributes: ["id", "title", "content", "zip_code", "resource_type", "contact", "createdAt", "updatedAt"],
      where: {
        user_id: user,
      },
    });
    console.log(askgiveData);
    console.log(user);

    if (!askgiveData) {
      res.status(404).json({
        message: "No post found with this id"
      });
      return;
    }

    const askgives = askgiveData.map((askgive) => askgive.get({ plain: true }));
    console.log(askgives);
    res.render('dashboard', {
      askgives,
      loggedIn: req.session.logged_in,
      name: req.session.name
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

//GET create new post page
router.get("/createpost", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('askpost', {
    loggedIn: req.session.logged_in
  });
});

//render post by id, this is where user can update or delete
router.get("/getpost/:id", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  const postData = await Ask_Give.findOne({
    where: {
      id: req.params.id
    },
    attributes: ["id", "ask_or_give", "title", "content", "zip_code", "resource_type", "contact"],
  })

  console.log(postData)
  const post = postData.get({ plain: true });

  console.log(post)

  res.render('updatedelete', {
    post,
    loggedIn: req.session.logged_in
  });
});


module.exports = router;