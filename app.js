"use strict";

const express = require('express');
const app = express();
const cors = require('cors');

app.set('views', '../src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/src/public`));
app.use(cors());

const root = require('./src/apis/root');
app.use('/', root);
app.use('/api/', root);
module.exports = app;