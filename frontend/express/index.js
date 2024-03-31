import express from 'express';
import * as routers from './api/routes/index.js';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

let loggingType = 'short';
if (process.env.NODE_ENV === 'development') {
  loggingType = 'dev';
}

app.use(morgan(loggingType));
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());

for (const route in routers) {
  let path = route;
  if (route === 'home') {
    path = '';
  }
  app.use(`/${path}`, routers[route]);
}

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.status || 500);
  res.send({
    error: {
      message: error.message,
    },
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server started: http://localhost:${process.env.PORT}`)
);
