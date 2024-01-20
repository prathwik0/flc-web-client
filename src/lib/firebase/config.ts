// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { derived, get, writable, type Readable, type Writable } from 'svelte/store';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBVNpH6sRHMR7MEzmSdDkXA2Ac9_-191io',
	authDomain: 'hackloop24.firebaseapp.com',
	projectId: 'hackloop24',
	storageBucket: 'hackloop24.appspot.com',
	messagingSenderId: '630482923201',
	appId: '1:630482923201:web:556d2e109c2076c76f6e40',
	measurementId: 'G-2V3GYNNDVN'
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApp();
	deleteApp(app);
	app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

function userStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		console.warn('Not in browser or Firebase Auth function is not initialized');
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user) => {
			set(user);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}

export const user = userStore();
/** Helper store for userLoaded */
export const called: Writable<boolean> = writable(false);

/** indicates whether the user (if present) is loaded or is still currently loading */
export const userLoaded: Writable<boolean> = writable(false);
onAuthStateChanged(auth, (user) => {
	if (!auth || !globalThis.window) {
		return;
	}
	called.set(true);
	if (user) {
		userLoaded.set(false);
	} else {
		userLoaded.set(true);
	}
});
