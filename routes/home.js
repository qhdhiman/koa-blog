var router = require('koa-router')({
  prefix: '/'
});

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
