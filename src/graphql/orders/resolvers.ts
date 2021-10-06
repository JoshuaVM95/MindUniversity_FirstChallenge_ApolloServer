import { ApolloError } from "apollo-server";
import { GraphqlContext } from "../../types/GraphqlContext";
import { Order } from "../../types/Order";

module.exports = {
	Query: {
		orders: (root: undefined, args: undefined, { firestore, auth, token }: GraphqlContext) => {
			return firestore
				.collection("orders")
				.where("createdBy", "==", token)
				.get()
				.then((snapshot) => {
					const ordersCollection: any[] = [];
					snapshot.forEach((doc) => {
						const objToPush = {
							...doc.data(),
							id: doc.id
						};
						ordersCollection.push(objToPush);
					});
					return ordersCollection;
				})
				.catch((err) => {
					console.log("Error getting documents", err);
					throw new ApolloError(err);
				});
		}
	},
	Mutation: {
		createOrder: (root: undefined, args: Order, { firestore, auth, token }: GraphqlContext) => {
			return firestore
				.collection("orders")
				.add({
					createdBy: token,
					size: args.size,
					ingredients: args.ingredients,
					price: args.price,
					hasExtraCheese: args.hasExtraCheese,
					created_at: new Date()
				})
				.then(() => {
					return {
						message: "Order saved",
						code: 201
					};
				})
				.catch((err) => {
					console.log(err);
					throw new ApolloError(err);
				});
		}
	}
};
