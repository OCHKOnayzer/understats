import { writable } from "svelte/store";
import { t } from 'svelte-i18n';

export const headerTitle = writable('');

export const selectHeaderTitle = (title: string) => { 
    
        headerTitle.set(title);
}
 