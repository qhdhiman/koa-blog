import UserCtrl from "../controllers/userCtrl";

var router = require('koa-router')({
  prefix: '/user'
});

router.post('/signup', UserCtrl.signup);
router.post('/signin', UserCtrl.signin);
router.post('/getLoginUser', UserCtrl.getLoginUser);

module.exports = router;
