import firebase from 'firebase';

try {
    // Initialize Firebase
    const config = {
        apiKey: 'AIzaSyCpAhkyL5t0tXXYm6kHqc50zl_4q1u72R8',
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_BUCKET
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;