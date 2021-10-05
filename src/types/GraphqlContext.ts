import admin from 'firebase-admin'

export interface GraphqlContext {
	firestore: FirebaseFirestore.Firestore
	auth: admin.auth.Auth
	token: string
}
