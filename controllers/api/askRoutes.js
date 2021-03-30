const router = require('express').Router();
const { Ask_Give, User, Comment } = require('../../models');

// Using the /api/ask endpoint

//ask Search API
router.get('/ask_search', async (req, res) => {
    try {
        const whereClause = {}
        if (req.query.askGive){
            whereClause.ask_or_give=req.query.askGive
        }
        if (req.query.category){
            whereClause.resource_type=req.query.category
        }
        if (req.query.zip){
            whereClause.zip_code=req.query.zip
        }
        const askData = await Ask_Give.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],

            where: whereClause
        });

        const asks = askData.map((ask_give) => ask_give.get({ plain: true }));

        res.render('ask', {
            asks,
            loggedIn: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});





// //ask Search API
// router.get('/ask_search/:askGive/:category/', async (req, res) => {
//     try {
//         // console.log(req.params);
//         const askData = await Ask_Give.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name'],
//                 },
//             ],

//             where: {
//                 ask_or_give: req.params.askGive,
//                 resource_type: req.params.category,
//             },

//         });

//         const asks = askData.map((ask_give) => ask_give.get({ plain: true }));
//         // console.log('Here is the asks variable: ', asks);

//         res.render('ask', {
//             asks,
//             loggedIn: req.session.logged_in
//         });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



module.exports = router;