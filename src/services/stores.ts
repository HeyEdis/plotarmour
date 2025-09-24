import { derived, writable } from 'svelte/store';

const storedFirstname = localStorage.getItem("fname");
const storedLastname = localStorage.getItem("lname");
const storedAmount = localStorage.getItem("amount");
const fullName = {storedFirstname} + " " + {storedLastname};
export const name = writable(fullName);
export const amount = writable(storedAmount)
// theme.subscribe(value => {
//     localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
// });