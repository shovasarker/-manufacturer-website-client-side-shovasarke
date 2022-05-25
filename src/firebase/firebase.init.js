// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBesas0iad-cc0-sWjlTFBUVYRFPLVAOT8',
  authDomain: 'abacus-parts.firebaseapp.com',
  projectId: 'abacus-parts',
  storageBucket: 'abacus-parts.appspot.com',
  messagingSenderId: '450897691541',
  appId: '1:450897691541:web:45afa75b6ff04955622c9c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
