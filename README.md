# node-rest-api
Пример простейшего rest-api на NodeJS + Mongoose.

Для запуска выполнить:

```
node app.js
```

Содержит CRUD реализацию для одной референсной сущности product:

| Method | Endpoints           | Notes              |
| ------ | ------------------- | ------------------ |
| POST   | /product/create     | Add product        |
| GET    | /product            | Get all products   |
| GET    | /product/:id        | Get single product |
| PUT    | /product/:id/update | Update product     |
| DELETE | /product/:id/delete | Delete product     |
