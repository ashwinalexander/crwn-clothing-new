import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyD1FGQ8X8PVqdkrNP7dPrC6IjBDAKqI_Hk',
  authDomain: 'crwn-db-328ac.firebaseapp.com',
  projectId: 'crwn-db-328ac',
  storageBucket: 'crwn-db-328ac.appspot.com',
  messagingSenderId: '918018032991',
  appId: '1:918018032991:web:42527ab4e55efb8b8762ea',
};

firebase.initializeApp(config);

//access to store shop data
export const firestore = firebase.firestore();

//firebase helps with authentication
export const auth = firebase.auth();

//firebase helps with Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
