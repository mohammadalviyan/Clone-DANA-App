const express = require('express');
const Router = express.Router();

const verify = require('../middleware/verifyToken');

// Routes all
const userRouter = require('./users');
const newsRouter = require('./news');
const vouchersRouter = require('./vouchers');

Router.get('/',(req,res)=> {
  res.json({
      message: "Welcome to Danain",
  });
})

// use route
Router.use('/api/users', userRouter);
Router.use('/api/news', verify, newsRouter);
Router.use('/api/vouchers', verify, vouchersRouter);

module.exports = Router;