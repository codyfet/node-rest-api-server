const Product = require('../models/product.model');

/**
 * Создать запись.
 */
module.exports.product_create = function (req, res, next) {
    Product.create({
        name: req.body.name,
        price: req.body.price
    }, function (err) {
        if (err) return next(err);
        res.send('Product created successfully!');
    });
    
    /*
        Можно создать запись и так:

        let product = new Product({
            name: req.body.name,
            price: req.body.price
        });

        product.save(function (err) {
            if (err) return next(err);
            res.send('Product Created successfully')
        });
    */
};

/**
 * Получить список всех записей.
 */
module.exports.product_all_details = function (req, res) {
    Product.find({}, (err, items) => {
        res.send(items);
    });
}

/**
 * Получить запись по id.
 */
module.exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};

/**
 * Изменить запись по id.
 */
module.exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

/**
 * Удалить запись по id.
 */
module.exports.product_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};