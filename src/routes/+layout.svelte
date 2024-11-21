<script>
import { ParaglideJS } from '@inlang/paraglide-sveltekit';
import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
import { onMount } from 'svelte';
import { waitLocale } from 'svelte-i18n';
import { Toaster } from 'svelte-french-toast';

import Container from '$components/providers/container/Container.svelte';
import Menu from '$components/ui/menu/Menu.svelte';
import { i18n } from '$lib/i18n';
import Header from '$src/components/ui/header/header.svelte';
import AuthModal from '$src/components/ui/modal/ModalLayout.svelte';
import { isModalOpen } from '$src/stores/modalStore';
import '$src/styles/fonts.css';

import { browser } from '$app/environment';
import { page } from '$app/stores';
import '../app.css';

let isLocaleReady = false;

waitLocale().then(() => {
	isLocaleReady = true;
});
onMount(() => {
	if (isModalOpen) document.body.style.overflow = 'hidden';
});
const routesWithoutHeader = ['/stats', '/landing'];
const routesWithoutMenu = ['/landing'];

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			enabled: browser
		}
	}
});

function getUserLanguage() {
	if (navigator.languages && navigator.languages.length) {
		return navigator.languages[0];
	} else if (navigator.language) {
		return navigator.language;
	} else {
		return 'en';
	}
}

console.log(getUserLanguage());
</script>

<QueryClientProvider client="{queryClient}">
	<ParaglideJS i18n="{i18n}">
		<Container>
			<main>
				{#if isLocaleReady}
					{#if !routesWithoutMenu.includes($page.url.pathname)}
						<Menu />
					{/if}

					<div class="mainContent">
						{#if $isModalOpen}
							<AuthModal />
						{/if}
						{#if !routesWithoutHeader.includes($page.url.pathname)}
							<Header />
						{/if}

						<slot />
					</div>
				{:else}
					<p style="color: white; text-align: center; margin-top: 20%;">Loading translations...</p>
				{/if}
			</main>

			<Toaster />
		</Container>
	</ParaglideJS>
</QueryClientProvider>

<style>
main {
	min-height: 100vh;
	height: fit-content;
	background-color: #0d111d;
	display: flex;
	gap: 1rem;
}
.mainContent {
	position: relative;
	width: 87vw;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
}
@media screen and (max-width: 1024px) {
	.mainContent {
		margin-left: 30vw;
	}
}
</style>
