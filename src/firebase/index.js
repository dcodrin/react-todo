import firebase from 'firebase';

try {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDSs1KuIeeXLUfDj27JS6iBeQN3FSG6QvE",
        authDomain: "react-redux-todo-7ff8c.firebaseapp.com",
        databaseURL: "https://react-redux-todo-7ff8c.firebaseio.com",
        storageBucket: "react-redux-todo-7ff8c.appspot.com"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;