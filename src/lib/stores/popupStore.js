import { writable } from 'svelte/store';

export const popupStore = writable({
    title: '',
    text: '',
    isShow: false,
});
