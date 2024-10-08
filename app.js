import cookieParser from 'cookie-parser';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import path from 'path';

import indexRouter from './routes/index.js'; // .js extension added
import usersRouter from './routes/users.js'; // .js extension added

const app = express();

// view engine setup
app.set('views', path.join(path.resolve(), 'views')); // __dirname replaced with path.resolve()
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
