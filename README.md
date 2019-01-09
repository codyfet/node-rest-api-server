# node-rest-api-server
Пример простейшего CRUD rest-api на NodeJS + Mongoose.

Для запуска выполнить:

```
npm install 

npm run dev
```

Для того, чтобы использовать свою БД необходимо прописать в src/config/db.js данные для подключения к бд.
Легче всего использовать MongoDB через MLAB - он сгенерирует строку для подключения к MongoDB автоматически (необходимо создать минимум одного пользователя бд).

Пример содержит CRUD реализацию для одной референсной сущности product:

Схема product имеет вид: 
```
const ProductSchema = new Schema({
    name: {
        type: String,
        reuired: true
    },
    price: {
        type: Number,
        required: true
    }
});
```

| Method | Endpoints           | Notes              |
| ------ | ------------------- | ------------------ |
| POST   | /product/create     | Add product        |
| GET    | /product            | Get all products   |
| GET    | /product/:id        | Get single product |
| PUT    | /product/:id/update | Update product     |
| DELETE | /product/:id/delete | Delete product     |

Клиентская часть, через которую можно выполнить запрос к серверной расположена здесь: [node-rest-api-client](https://github.com/codyfet/node-rest-api-client) 
