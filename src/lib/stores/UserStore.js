import { writable } from 'svelte/store';

const user = writable({
	isLoggedIn: false,
	firstname: null,
	lastname: null,
	login: null,
	mail: null,
	localApiKey: null
});

const STORAGE_KEY = 'savedAuthData';
const isBrowser = typeof window !== 'undefined';
const data = isBrowser ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : null;

if (isBrowser && !data) {
	if (window.location.pathname != '/login') {
		window.location.href = '/login';
	}
} else {
	user.set({ isLoggedIn: true, ...data });
}

export default user;
