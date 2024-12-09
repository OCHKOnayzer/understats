<script>
import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
import { onMount } from 'svelte';
import { Toaster } from 'svelte-french-toast';
import { waitLocale } from 'svelte-i18n';
import Container from '$components/providers/container/Container.svelte';
import Menu from '$components/ui/menu/Menu.svelte';
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
	if ($isModalOpen) document.body.style.overflow = 'hidden';
});

const routesWithoutHeader = ['/stats', '/'];
const routesWithoutMenu = ['/'];

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			enabled: browser
		}
	}
});
</script>

<QueryClientProvider client="{queryClient}">
		<Container>
			<main>
				{#if isLocaleReady}
					{#if !routesWithoutMenu.includes($page.url.pathname)}
						<Menu />
					{/if}
					{#if $isModalOpen}
						<AuthModal />
					{/if}
					<div class="mainContent">
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
</QueryClientProvider>

<style>
main {
	min-height: 100vh;
	height: fit-content;
	display: flex;
	gap: 1rem;
	width: 100%;
	height: 100%;
}
.mainContent {
	position: relative;
	width: 100vw;
	display: flex;
	flex-direction: column;
}
/* @media screen and (max-width: 1024px) {
	.mainContent {
		margin-left: 30vw;
	}
} */
</style>
