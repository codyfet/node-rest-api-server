const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db_config = require('../config/db');

// Импортируем роуты.
const product = require('./routes/product.route'); 

// Инициализируем express приложение.
const app = express();

// Устанавливаем соединение между mongoose и mongodb.
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || db_config.url;
mongoose.connect(mongoDB, { useNewUrlParser: true }); 
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Устанавливаем middleware обработчики.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// Покдключаем роуты.
app.use('/product', product);

let port = 1234;
app.listen(port, () => {
    console.log('Server is running on port ' + port)
});
