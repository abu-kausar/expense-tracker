const express = require('express');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');

const router = express.Router();

router.get('/getIncomes', getIncomes);

router.post('/addIncome', addIncome);

router.delete('/deleteIncome/:id', deleteIncome);

router.post('/addExpense', addExpense)
    .get('/getExpense', getExpense)
    .delete('/deleteExpense/:id', deleteExpense)

module.exports = router;