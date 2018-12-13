# node-rest-api
Пример простейшего rest-api на NodeJS + Mongoose (MongoDB).

Для запуска выполнить:

```
node app.js
```

Содержит CRUD реализацию для одной референсной сущности product:

| Method   | Endpoints         | Notes              |
| -------- |------------------ | ------------------ |
| GET      | /product          | Get all products   |
| GET      | /product/:id      | Get single product |
| POST     | /product          | Add product        |
| PUT      | /product/:id      | Update product     |
| DELETE   | /product/:id      | Delete product     |
