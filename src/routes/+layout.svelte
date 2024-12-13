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

const isProduction = import.meta.env.PROD;
</script>

{#if isProduction}
	<!-- eslint-disable -->
	<!-- prettier-ignore-start -->
	
	
	<!-- Start of LiveChat (www.livechat.com) code -->
	<script>
		window.__lc = window.__lc || {};
		window.__lc.license = 18920616;
		window.__lc.integration_name = "manual_onboarding";
		window.__lc.product_name = "livechat";
		;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
	</script>
	<noscript><a href="https://www.livechat.com/chat-with/18920616/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
	<!-- End of LiveChat code -->
	
	
	<!-- prettier-ignore-end -->
	<!-- eslint-enable -->
{/if}

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
