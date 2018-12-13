const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

/**
 * Создать запись.
 */
router.post('/create', product_controller.product_create);

/**
 * Получить список всех записей.
 */
router.get('/', product_controller.product_all_details);

/**
 * Получить запись по id.
 */
router.get('/:id', product_controller.product_details);

/**
 * Изменить апись по id.
 */
router.put('/:id/update', product_controller.product_update);

/**
 * Удалить запись по id.
 */
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;