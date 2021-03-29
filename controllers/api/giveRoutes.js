const router = require('express').Router();
const { Ask_Give, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Using the /gives endpoint

//ask Search API
router.post('/give_search', withAuth, async (req, res) =>{
    try{
        // console.log('Req.body');
        // console.log(req.body);
        const askData = await Ask_Give.findAll(req.body, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                  },
                //   {
                //     model: Comment,
                //     attributes: ['content'],
                //     include: {
                //       model: User, attributes: ['name'],
                //     }
                //   },
            ],
            where: {
                ask_or_give: 'give',
                resource_type: req.body.category,
                // city: req.body.city,
                zip_code: req.body.zip
                
            },
            
          
        
        });
        
        const gives = askData.map((ask_give) => ask_give.get({ plain: true }));
        console.log('Here is the gives variable: ', gives);

        res.render('give', {
            gives,
            loggedIn: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;