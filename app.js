const express = require('express');
const bodyParser = require('body-parser');

// Импортируем роуты.
const product = require('./routes/product.route'); 

// Инициализируем express приложение.
const app = express();

// Устанавливаем соединение между mongoose и mongodb.
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://a.volkov:.gb.gb30@ds129914.mlab.com:29914/frontweek';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true }); 
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Устанавливаем ???.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Покдключаем роуты.
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
        console.log('Server is running on port ' + port)
    }
);



