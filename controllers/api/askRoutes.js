const router = require('express').Router();
const { Post } = require('../models');

// Using the /ask endpoint

//READ all ask posts
router.get('/', async (req, res) =>{
    try{
        const askData = await Post.findAll({
            where: {
                ask_or_give: 'ask',
            }
        });
        res.status(200).json(askData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//READ all asks by type of resource
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                category: req.params.category,
            }
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//CREATE new post
router.put('/new', async (req, res) => {
    try {
        const askData = await Ask.create({

        });
        res.status(200).json(askData);
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