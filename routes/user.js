var router = require('koa-router')({
  prefix: '/user'
});

const UserCtrl  = require('../controllers/user');
router.get('/add', UserCtrl.addUser);

module.exports = router;
