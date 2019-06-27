import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config)

const db = firebase.firestore()

const settings = { timestampsInSnapshots: true }
db.settings(settings)

// export firestore database
export default firebaseApp.firestore()
