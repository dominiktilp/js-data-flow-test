import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import hello from './hello.es6.js';
import itemsRouter from './items.es6.js';
import typesRouter from './types.es6.js';

let port = process.env.PORT || 8888;

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function supportCrossOriginScript(req, res, next) {
  res.status(200);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
}
app.use(supportCrossOriginScript);
app.options('*', supportCrossOriginScript);

let router = express.Router();
router.get('/', hello);
app.use('/api', router);

app.use('/api/items', itemsRouter);
app.use('/api/types', typesRouter);



app.listen(port);
console.log('Magic happens on port ' + port);
