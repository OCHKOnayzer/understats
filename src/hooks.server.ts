// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { i18n } from '$lib/i18n'
import { sequence } from '@sveltejs/kit/hooks'

// add your own hooks as part of the sequence here
export const handle = sequence(i18n.handle())
