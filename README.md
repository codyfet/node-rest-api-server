# node-rest-api-server
Пример простейшего CRUD rest-api на NodeJS + Mongoose.

Для запуска выполнить:

```
npm install 

npm run dev
```

Также не забудьте прописать в src/config/db.js данные для подключения к бд.
MLAB сгенерирует строку для подключения к MongoDB автоматически (необходимо создать минимум одного пользователя бд).

Пример содержит CRUD реализацию для одной референсной сущности product:

| Method | Endpoints           | Notes              |
| ------ | ------------------- | ------------------ |
| POST   | /product/create     | Add product        |
| GET    | /product            | Get all products   |
| GET    | /product/:id        | Get single product |
| PUT    | /product/:id/update | Update product     |
| DELETE | /product/:id/delete | Delete product     |
