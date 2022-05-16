const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test2')
mongoose.connection.once('open',()=>{console.log('9')})
mongoose.connection.once('colse',()=>{console.log('9')})
