import firebase from 'firebase';

console.log(process.env.NODE_ENV ? 'YES' : 'NO');

try {
    // Initialize Firebase
    const config = {
        apiKey: process.env.API_KEY,
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