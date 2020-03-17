const expense = require('express').Router()
const Expense = require('../models/expense.js')

// Index route
expense.get('/', (req, res) => {
  Expense.find({}, (err, foundExpense) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(foundExpense)
  })
})

// Create route
expense.post('/', async(req, res)  => {
  Expense.create(req.body, (error, createdExpense) => {
    if(error) {
      res.status(400).json({error: error.message})

    }
    res.status(200).send(createdExpense)
  })
})

// Delete route
expense.delete('/:id', (req, res) => {
  Expense.findByIdAndRemove(req.params.id, (err, deletedExpense) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(deletedExpense)
  })
})
// Update route
expense.put('/:id', (req, res) => {
  Expense.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedExpense) => {
    if (err) {
      res.status(400).json({ error: err.message })
    }
    res.status(200).json(updatedExpense)
  })
})

module.exports = expense
