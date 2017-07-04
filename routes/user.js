var router = require('koa-router')({
  prefix: '/user'
});

const UserCtrl  = require('../controllers/userCtrl');
router.get('/signup', UserCtrl.signup);
router.get('/signin', UserCtrl.signin);

module.exports = router;
