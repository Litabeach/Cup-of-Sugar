const router = require('express').Router();
const { Post } = require('../../models');

//Using the /post endpoint

//CREATE new post
router.put('/', async (req, res) => {
    try {
        const postData = await Post.create({

        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


//UPDATE a give by ID
router.put('/edit/:id', async (req, res) => {
    try {
        const askData = await Ask.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        if (!askData) {
            res.status(404).json({ message: "No posts found with that ID!" })
        }
        res.status(200).json(askData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;