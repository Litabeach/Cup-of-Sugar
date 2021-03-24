const router = require('express').Router();
const { Post } = require('../../models');

// Using the /api/ask endpoint

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
        const askData = await Post.findAll({
            where: {
                resource_type: req.params.resource_type,
            }
        })
        res.status(200).json(askData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//READ all asks by zip code
router.get('/', async (req, res) => {
    try {
        const askData = await Post.findAll({
            where: {
                zip_code: req.params.zip_code,
            }
        })
        res.status(200).json(askData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;