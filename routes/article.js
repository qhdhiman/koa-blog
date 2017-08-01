var router = require('koa-router')({
  prefix: '/article'
});

const ArticleCtrl  = require('../controllers/articleCtrl');
router.post('/add', ArticleCtrl.add);
router.post('/comment', ArticleCtrl.comment);
router.post('/like', ArticleCtrl.like);
router.post('/favorite', ArticleCtrl.favorite);
router.get('/find/:_id', ArticleCtrl.findById);
router.get('/list/:userId', ArticleCtrl.findByUserId);
router.get('/all', ArticleCtrl.findAll);

module.exports = router;
