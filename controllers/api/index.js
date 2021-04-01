const router = require('express').Router();

//Reading and sorting asks
const askRoutes = require('./askRoutes');

//Post routes
const postRoutes = require('./postRoutes');

//User dashboard
const userRoutes = require('./userRoutes');

router.use('/asks', askRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);

module.exports = router;