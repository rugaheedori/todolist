"use strict";
const crypto = require("crypto");
const {Todo} = require("../../models/db.js");

const start = (req, res) => {
    res.render("");
};

const todolist = {
  start: (req, res) => {
      console.log("g");
    res.render('todolist');
  },

  read: (req, res) => {
    // return new Promise((resolve, reject) => {
    //     Todo.find((err, Todo) => {
    //         const datas = [];
    //         Todo.forEach((x) => {
    //             datas.push(x);
    //         });
    //         if (err) reject(err);
    //         resolve(datas);
    //         })
        if (err) return res.json({ success: false});
        else {
            const datas = [];
            Todo.forEach((x) => {
                datas.push(x);
            });
            console.log(datas);
            return res.status(200).send(datas);
        }
    },

  create: (req, res) => { 
    const todo = new Todo(req.body);
    const index = crypto.randomBytes(20).toString("hex").slice(0,20); //token 생성
    todo.id = index;
    todo.save((err, todoInfo) => {
        if (err) return res.json({ success: false});
        return res.status(200).send(index);
    })
  },
 
  update: (req, res) => {
    const todo = new Todo(req.body);
    const index = req.params.index;
    todo.id = index;
    Todo.findOneAndUpdate({ id: index }, {name: todo.name, description: todo.description}, (err, todoInfo) => {
        if (err) return res.json({ success: false});
        return res.status(200).json({
            success: true
        });
    })
  },

  delete: (req, res) => {
    const todo = new Todo(req.body);
    const index= req.params.index;
    Todo.findOneAndDelete({ id: index }, (err, results) => {
        if (err) return res.json({ success: false});
        return res.status(200).json({
            success: true
        });
    })
  }
};

module.exports = {
    start,
    todolist,
};