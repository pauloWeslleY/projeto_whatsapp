const firebase = require("firebase");
require("firebase/firestore");

export class Firebase {
	constructor() {
		this._config = {
			apiKey: "AIzaSyDHmUiN4pIda2GcqN4tMWkhpEXHXk5zy9E",
			authDomain: "whatsapp-clone-79325.firebaseapp.com",
			projectId: "whatsapp-clone-79325",
			storageBucket: "whatsapp-clone-79325.appspot.com",
			messagingSenderId: "263154421435",
			appId: "1:263154421435:web:2f55bd78cf06ffb7cc239e",
		};
		this.init();
	}

	init() {
		if (!window._initializedFirebase) {
			firebase.initializeApp(this._config);
			firebase.firestore().settings({});
			window._initializedFirebase = true;
		}
	}

	static db() {
		return firebase.firestore();
	}

	static hd() {
		return firebase.storage();
	}

	initAuth() {
		return new Promise((s, f) => {
			let provider = new firebase.auth.GoogleAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((result) => {
					let token = result.credential.accessToken;
					let user = result.user;
					s({
						user,
						token,
					});
				})
				.catch((err) => {
					f(err);
				});
		});
	}
}
