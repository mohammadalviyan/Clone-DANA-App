const express = require('express');
const Router = express.Router();

const verify = require('../middleware/verifyToken');

// Routes all
const userRouter = require('./users');
const newsRouter = require('./news');
const vouchersRouter = require('./vouchers');
const categoryRouter = require('./category');
const transactionsRouter = require('./transactions');

Router.get('/',(req,res)=> {
  res.json({
      message: "Welcome to Danain",
  });
})

// use route
Router.use('/api/users', userRouter);
Router.use('/api/news', newsRouter);
Router.use('/api/vouchers', vouchersRouter);
Router.use('/api/categories', categoryRouter);
Router.use('/api/transactions', transactionsRouter);

module.exports = Router;