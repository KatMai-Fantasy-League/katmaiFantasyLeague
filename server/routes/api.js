const express = require('express');
const { json } = require('react-router-dom');
const router = express.Router();

// import controllers
const bearController = require('../controllers/bearController');

router.get('/myBracket', bearController.getMyBracket, (req, res) => {
  res.status(200).json(res.locals.myBracket);
});

router.get('/resultsBracket', bearController.getResultsBracket, (req, res) => {
  res.status(200).json(res.locals.resultsBracket);
});

router.get('/bears', bearController.getBears, (req, res) => {
  res.status(200).json(res.locals.bears);
});

module.exports = router;
