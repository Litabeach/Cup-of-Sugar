const router = require('express').Router();
const { Post } = require('../../models');


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