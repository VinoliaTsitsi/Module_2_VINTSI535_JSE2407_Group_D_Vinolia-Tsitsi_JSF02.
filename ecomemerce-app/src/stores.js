// src/stores.js
import { writable } from 'svelte/store';

export const sorting = writable('default');
export const filterItem = writable('All categories');
export const searchTerm = writable('');
