const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');
const { useRouteMatch } = require('react-router-dom');

router.use('/api', apiRoutes);

router.use(function(req, res) { 
    res.sendFile(path.join(_dirname, "../client/build/index.html"));
});

module.exports = router;