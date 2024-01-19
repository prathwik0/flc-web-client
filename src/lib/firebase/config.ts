// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
