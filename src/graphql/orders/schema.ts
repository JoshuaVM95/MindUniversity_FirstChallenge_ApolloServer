export const OrdersSchema = `
    extend type Query {
        orders: [Order!]!
    }

    extend type Mutation {
        createOrder(size: String!, ingredients: [String!]!, hasExtraCheese: Boolean!, price: Int!): ResponseMessage!
    }

    type Order {
        size: String!
	    ingredients: [String!]!
	    hasExtraCheese: Boolean!
	    price: Int!
    }
`;
