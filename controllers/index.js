const router = require('express').Router();
const apiRoutes = require('./api/');
const landingRoutes = require('./landingRoutes');
const navigationRoutes = require('./navigationRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', landingRoutes);
router.use('/navigation', navigationRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;