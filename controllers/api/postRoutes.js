const router = require('express').Router();
const { Ask_Give} = require('../../models');
const withAuth = require('../../utils/auth')

//Using the /api/post endpoint

//CREATE new post
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Ask_Give.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


//UPDATE a post by ID
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Ask_Give.update(req.body, {
            ...req.body,
            user_id: req.session.user_id
        },
        {
            where: {
                id: req.params.id,
            }
        });
        if (!postData) {
            res.status(404).json({ message: "No posts found with that ID!" })
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;