const mongoose = require('mongoose');

var expenseSchema = mongoose.Schema({
    date: {type: String, require: true},
    item: {type: String, require: true},
    category: {type: String, require: true},
    description: {type: String, require: true},
    cost: {type: Number, default: 0},
    total: {type: Number, default: 0}
});

module.exports = mongoose.model('Expense', expenseSchema)
