const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));