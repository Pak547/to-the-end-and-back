const router = require('express').Router();
const apiRoutes = require('./api/apiRoutes');
const htmlRoutes = require('./htmlRoutes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);
router.use('/notes', htmlRoutes);

module.exports = router;