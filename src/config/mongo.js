const mongoose = require('mongoose');
const mongo_URI =require('./uri');


mongoose.connect(mongo_URI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(console.err);

module.exports = mongoose;