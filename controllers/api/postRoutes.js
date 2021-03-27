const router = require('express').Router();
const { Ask_Give } = require('../../models');
// const withAuth = require('../../utils/auth')

//Using the /api/post endpoint

//CREATE new post
router.post('/', async (req, res) => {
    try {
        const postData = await Ask_Give.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//READ post by ID
router.get('/:id', async (req,res) => {
    try {
        const postData = await Ask_Give.findAll({
            where: {
                id: req.params.id,
                // user_id: req.session.id,
            }
        });
        if (!postData) {
            res.status(404).json({ message: "No posts found with that ID!" });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})

//UPDATE a give by ID
router.put('/:id', async (req, res) => {
    try {
        const postData = await Ask_Give.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (!postData) {
            res.status(404).json({ message: "No posts found with that ID!" });
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//add delete route for a post
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Ask_Give.destroy({
            where: {
                id: req.params.id,
            }
        });
        if(!postData) {
            res.statusMessage(404).json({ message: "No posts found with that ID!" });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;