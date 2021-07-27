"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('./root.ctrl');

router.get("/", ctrl.start);
router.get('/todolist',ctrl.todolist.start);
router.get('/todolist',ctrl.todolist.read);
router.post('/todolist',ctrl.todolist.create);
router.put('/todolist/:index',ctrl.todolist.update);
router.delete('/todolist/:index',ctrl.todolist.delete);

module.exports = router;