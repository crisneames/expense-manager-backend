const express = require('express')
const app = express()
//const PORT = 3003
const expenseController = require('./controllers/expense.js')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/expenseManager';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Middleware
app.use(express.json())



const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const corsOptions = {
    origin: function (origin, callback){
        if(whitelist){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions)) // all routes are now exposed, sometimes you just want to limit access (ie OMDB - it's ok for anyone to see the movies, but you don't want just anyone updating the movies)

//Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/expenseManager', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


app.use('/expense', expenseController)

app.get('/', (req, res) => {
  res.send('Hello World');
//   Expense.find({}, (err, foundExpense) => {
// res.send('Hello World')
//     if (err) {
//       res.status(400).json({ error: err.message })
//     }
//     res.status(200).json(foundExpense)
//   })
});

app.listen(PORT, () => {
  console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
})
