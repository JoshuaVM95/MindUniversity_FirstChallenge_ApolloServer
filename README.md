## API URL

You can test the api deployed in heroku in `https://pizza-challenge-mind-u.herokuapp.com/`

### The available queries are

-   createOrder: <br />
    `mutation createOrder($size: String!, $ingredients: [String!]!, $hasExtraCheese: Boolean!, $price: Int!) { createOrder(size: $size, ingredients: $ingredients, hasExtraCheese: $hasExtraCheese, price: $price) { code message } }`

-   orders: <br />
    `query orders { orders { size ingredients hasExtraCheese price } }`

In both of this queries you need to send in the headers a Authorization value so the orders gets related to that value.

The app is served by apollo server and the data is managed by firebase firestore


### Local
To run this locally you will need to run `npm run dev` and add a firebase/serviceAcountKey. This will run the server on localhost:3001