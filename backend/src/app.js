const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb+srv://joaog15:152216@cluster0.iy1dd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);