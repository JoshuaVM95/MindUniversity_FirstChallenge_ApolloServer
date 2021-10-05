import { ApolloServer } from 'apollo-server'
import typeDefs from './graphql/shcema'
import resolvers from './graphql/resolvers'

import admin, { ServiceAccount } from 'firebase-admin'

import serviceAccount from './firebase/serviceAccountKey.json'

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount as ServiceAccount)
})

const port = process.env.PORT || 3001

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		const firestore = admin.firestore()
		const auth = admin.auth()
		const token = req.headers.authorization || ''
		return { firestore, auth, token }
	}
})

server.listen({ port }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}  `)
})
