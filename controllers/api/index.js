const router = require('express').Router();

//Posts for asks
const askRoutes = require('./askRoutes');

//Posts for gives
const giveRoutes = require('./giveRoutes');

//User dashboard
const userRoutes = require('./userRoutes')

router.use('/asks', askRoutes);
router.use('/gives', giveRoutes);
router.use('/user', userRoutes);

module.exports = router;