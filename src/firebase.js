import * as firebase from 'firebase';
const config = {
		apiKey: "AIzaSyBnpYshyrUFy-6kNWdOwqar2mn3Y7j-ujM",
		authDomain: "mix-n-match-lol.firebaseapp.com",
		databaseURL: "https://mix-n-match-lol.firebaseio.com",
		projectId: "mix-n-match-lol",
		storageBucket: "mix-n-match-lol.appspot.com",
		messagingSenderId: "167341100348"
};

firebase.initializeApp(config);

export default firebase;
