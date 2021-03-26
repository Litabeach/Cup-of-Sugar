const router = require('express').Router();
const { Ask_Give, User } = require('../../models');
const withAuth = require('../../utils/auth')

// Using the /api/ask endpoint

//READ all asks
router.get('/', withAuth, async (req, res) =>{
    try{
        const askData = await Ask_Give.findAll({
            where: {
                ask_or_give: 'ask',
            },
            attributes: ['title', 'content', 'resource_type', 'contact', 'createdAt', 'updatedAt'],
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });
        const asks = askData.map((ask_give) => ask_give.get({ plain: true }));
        res.render('asks', {
            asks,
            loggedIn: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

// // READ all asks by type of resource
// router.get('/', withAuth, async (req, res) => {
//     try {
//         const askDAta = await Ask_Give.findAll({
//             where: {
//                 ask_or_give: 'ask',
//                 resource_type: req.params.resource_type,
//             },
//             attributes: ['title', 'content', 'resource_type', 'contact', 'createdAt', 'updatedAt'],
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name']
//                 }
//             ]
//         });
//         const asks = askData.map((ask_give) => ask_give.get({ plain: true }));
//         res.render('', {
//             asks,
//             loggedIn: req.session.logged_in
//         })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // READ all asks by zip code
// router.get('/', withAuth, async (req, res) => {
//     try {
//         const askData = await Ask_Give.findAll({
//             where: {
//                 ask_or_give: 'ask',
//                 zip_code: req.params.zip_code,
//             },
//             attributes: ['title', 'content', 'resource_type', 'contact', 'createdAt', 'updatedAt'],
//             include: [
//                 {
//                     model: User,
//                     attributes: ['name']
//                 }
//             ]
//         })
//         const asks = askData.map((ask_give) => ask_give.get({ plain: true }));
//         res.render('', {
//             asks,
//             loggedIn: req.session.logged_in
//         })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;