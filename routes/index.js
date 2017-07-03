// app/routes/index.js
import fs from 'fs';
import path from 'path';
import koaRouter from 'koa-router';
const router = koaRouter();

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) && (file.split('.').slice(-1)[0] === 'js') && file !== 'index.js'
  )
  .forEach(file => {
    console.log(file);
    const route = require(path.join(__dirname, file));
    router.use(route.routes(), route.allowedMethods());
  });

// 把根路由/放在最后，以免当其他路由后面带有/时匹配到根路由
router.get('/', (ctx, next) => {
  ctx.body = 'home page';
});

export default router;
