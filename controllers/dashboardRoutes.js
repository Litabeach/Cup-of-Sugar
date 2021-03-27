const router = require('express').Router();
const { Ask_Give, User } = require('../models')
const withAuth = require('../utils/auth')

//Need GET route to the create post form
//Need GET route to view an existing post for updating or deleting

//from the /dashboard:

//render dashboard with all the users asks and gives
router.get('/', withAuth, async (req, res) => {
    try {
        const askgiveData = await Ask_Give.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: ["id", "title", "description", "createdAt"],
            include: [
                {
                    model: User,
                    attributes: ["name"]
                },
            ]
        })

        if (!askgiveData) {
            res.status(404).json({
                message: "No post found with this id"
            });
            return;
        }

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('dashboard', {
            blogs,
            loggedIn: req.session.logged_in
        })

    } catch (err) {
        res.status(500).json(err)
    }
})


//GET create new post page
router.get("/createpost", withAuth, async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('askpost', {
      loggedIn: req.session.logged_in
    });
  })

  //render post by id, this is where user can update or delete
router.get("/getpost:id", withAuth, async (req, res) => {
    if (!req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('updatedelete:id', {
      loggedIn: req.session.logged_in
    });
  })



module.exports = router;