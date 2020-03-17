const expense = require('express').Router()
const Expense = require('../modules/expense.js')

// Index route  - show expenses
expense.get('/', (req, res) => {
  res.send('Hello World');
//   Expense.find({}, (err, foundExpense) => {
// res.send('Hello World')
//     if (err) {
//       res.status(400).json({ error: err.message })
//     }
//     res.status(200).json(foundExpense)
//   })
});

module.exports = expense
