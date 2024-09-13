import { Body, Head, Html, Title } from '@base-framework/atoms';
import { Builder } from '@base-framework/base';
import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  const layout = () => (
    Html([
      Head([
        Title('Test Page')
      ]),
      Body('This is a test page')
    ])
  );

  const html = Builder.render(layout);
  res.send(html);
});

export default router;
