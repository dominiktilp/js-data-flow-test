import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import hello from './hello.es6.js';

let port = process.env.PORT || 8888;

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = express.Router();

router.get('/', hello);
app.use('/api', router);

function supportCrossOriginScript(req, res, next) {
    res.status(200);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}

app.use('/api', supportCrossOriginScript);
app.options('*', supportCrossOriginScript);



app.listen(port);
console.log('Magic happens on port ' + port);
