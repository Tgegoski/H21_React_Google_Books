const path = require('path');
const router = require('express').Router();

const apiRoutes = require('./api');


// const { useRouteMatch } = require('react-router-dom');

router.use('/api', apiRoutes);

module.exports = router;