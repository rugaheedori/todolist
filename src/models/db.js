const mongoose = require('../config/mongo');
const todoSchema = mongoose.Schema({
    id: {
        type: String,
        length: 20
    },

    description: {
        type: String,
        maxlength: 50
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};