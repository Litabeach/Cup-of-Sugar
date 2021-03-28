const router = require('express').Router();
const { Ask_Give, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
// Using the /api/ask endpoint

//ask Search API
router.get('/ask_search/:category/:askGive/:zip', withAuth, async (req, res) => {
    try {
        // console.log(req.params);
        const askData = await Ask_Give.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },

                {
                    model: Comment,
                    attributes: ['content', 'createdAt'],
                    include: {
                        model: User, attributes: ['name'],
                    }
                },
            ],

            where: {
                ask_or_give: req.params.askGive,
                resource_type: req.params.category,
                // city: req.body.city,
                zip_code: req.params.zip
            },

        });


        const asks = askData.map((ask_give) => ask_give.get({ plain: true }));
        console.log('Here is the asks variable: ', asks);

        res.render('ask', {
            asks,
            loggedIn: req.session.logged_in

        });


    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;