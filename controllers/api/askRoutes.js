const router = require('express').Router();
const { Ask_Give, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Using the /api/ask endpoint

//ask Search API
router.post('/ask_search', withAuth, async (req, res) =>{
    try{
        // console.log('Req.body');
        // console.log(req.body);
        const askData = await Ask_Give.findAll({
            ...req.body,
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
                ask_or_give: req.body.askGive,
                resource_type: req.body.category,
                // city: req.body.city,
                zip_code: req.body.zip
                
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