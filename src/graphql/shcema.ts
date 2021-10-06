const typeDefs = `
  type Query {
    example: String!
  }

  type Mutation {
    example: String!
  }

  type ResponseMessage {
      message: String!
      code: Int!
  }
`;

import { OrdersSchema } from "./orders/schema";

const schemaDefs = [typeDefs, OrdersSchema];

export default schemaDefs;
