var router = require('koa-router')({
  prefix: '/article'
});

const ArticleCtrl  = require('../controllers/articleCtrl');
router.get('/add', ArticleCtrl.add);

module.exports = router;
