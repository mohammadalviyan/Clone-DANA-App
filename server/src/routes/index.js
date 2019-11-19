const express = require('express');
const Router = express.Router();

const verify = require('../middleware/verifyToken');

// Routes all
const userRouter = require('./users');
// const newsRouter = require('./news');
// const vouchersRouter = require('./vouchers');

Router.get('/',(req,res)=> {
  res.json({
      message: "Welcome to Danain",
  });
})

// use route
Router.use('/api/users', userRouter);
// router.use('/api/news', verify, newsRouter);
// router.use('/api/vouchers', verify, vouchersRouter);

module.exports = Router;