const router = require('express').Router();

//Reading and sorting asks
const askRoutes = require('./askRoutes');

//Reading and gives
const giveRoutes = require('./giveRoutes');

//Post routes
const postRoutes = require('./postRoutes')

//User dashboard
const userRoutes = require('./userRoutes')

router.use('/asks', askRoutes);
router.use('/gives', giveRoutes);
router.use('/post'. postRoutes);
router.use('/user', userRoutes);

module.exports = router;