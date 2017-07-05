var router = require('koa-router')({
  prefix: '/user'
});

const UserCtrl  = require('../controllers/userCtrl');
router.post('/signup', UserCtrl.signup);
router.post('/signin', UserCtrl.signin);

module.exports = router;
