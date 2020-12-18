import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBKwD33Vx6P-6AjakdANmUwABdqujGrkNA",
    authDomain: "mern-facebook-clone-eee0c.firebaseapp.com",
    projectId: "mern-facebook-clone-eee0c",
    storageBucket: "mern-facebook-clone-eee0c.appspot.com",
    messagingSenderId: "6185958055",
    appId: "1:6185958055:web:fa73158428f3059da27982",
    measurementId: "G-KZ3MRZLY5K"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseApp.firestore();

export { auth, provider }
export default db