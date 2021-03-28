const router = require('express').Router();
const { Ask_Give, Comment } = require('../../models');
// const withAuth = require('../../utils/auth')

//Using the /api/post endpoint

//CREATE new post

router.post('/askpost', async (req, res) => {
    console.log("I'M HERE")
    try {
        const newPost = await Ask_Give.create(
            {
            ask_or_give: req.body.ask_or_give,
            title: req.body.title,
            content: req.body.content,
            zip_code: req.body.zip_code,
            resource_type: req.body.resource_type,
            contact: req.body.contact,
            user_id: req.session.user_id
        }
        );
        console.log(newPost)
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get to page to render askpost
router.get('/askpost', (req, res) => {
    res.render('askpost');
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

//UPDATE a post by ID
router.put('/:id', async (req, res) => {
    try {
        const postData = await Ask_Give.update({
            title: req.body.title,
            resource_type: req.body.resource_type,
            content: req.body.content,
            zip_code: req.body.zip_code,
            contact: req.body.contact
        }, {
            where: {
                id: req.body.post_id,
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

//DELETE a post
router.delete('/:id', async (req, res) => {
    console.log("I'M HERE")
    try {
        const postData = await Ask_Give.destroy({
            where: {
                id: req.body.post_id,
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

//CREATE a comment on a post
router.post('/comment', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;