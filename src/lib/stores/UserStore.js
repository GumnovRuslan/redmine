import { writable } from 'svelte/store';

export const user = writable({
    isLoggedIn: false,
    firstname: null,
    lastname: null,
    login: null,
    mail: null,
    localApiKey: null
});


/*
admin: false
api_key: "a856bbcb42d69ccf5df2002eb65b246ffc1f2afb"
created_on: "2020-11-03T06:23:54Z"
firstname: "Даниил"
id: 11
last_login_on: "2023-03-21T13:16:32Z"
lastname: "Переверзев"
login: "daniilp"
mail: "pereverzev.codedot@gmail.com"
*/
