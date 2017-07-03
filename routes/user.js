var router = require('koa-router')({
  prefix: '/user'
});

const UserCtrl  = require('../controllers/userCtrl');
router.get('/add', UserCtrl.addUser);

module.exports = router;
