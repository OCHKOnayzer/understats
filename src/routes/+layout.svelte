<script
	context="module"
	lang="ts">
export type LayoutData = {
	locale: string;
};
</script>

<script lang="ts">
import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
import { onDestroy, onMount } from 'svelte';
import { Toaster } from 'svelte-french-toast';
import { init, locale, waitLocale, t } from 'svelte-i18n';

import { ifWindow } from '$src/utils/functions/chat';
import Menu from '$components/ui/menu/Menu.svelte';
import Header from '$src/components/ui/header/header.svelte';
import AuthModal from '$src/components/ui/modal/ModalLayout.svelte';
import Test from '$src/components/ui/test.svelte';
import { selectedLang, setAppLanguage } from '$src/stores/languageStore';
import { isModalOpen } from '$src/stores/modalStore';
import '$src/styles/fonts.css';
import { langSel } from '$stores/HeaderStores';

import { browser } from '$app/environment';
import { page } from '$app/stores';

import '../app.css';

export let data: LayoutData;

init({
	fallbackLocale: 'en',
	initialLocale: data.locale
});

let isLocaleReady = false;

onMount(async () => {
	try {
		if ($selectedLang !== data.locale) {
			setAppLanguage(data.locale);
			locale.set(data.locale);
		}

		await waitLocale();
		isLocaleReady = true;
	} catch (error) {
		console.error($t('error.locale_error_in_client'), error);
	}
	ifWindow();
});

let unsubscribe;

onMount(() => {
	if ($isModalOpen) document.body.style.overflow = 'hidden';

	document.documentElement.lang = $langSel;

	unsubscribe = langSel.subscribe((currentLocale) => {
		document.documentElement.lang = currentLocale;
	});
});

onDestroy(() => {
	if (unsubscribe) {
		unsubscribe();
	}
});

const routesWithoutMenu = ['/registrations', '/authorization'];

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
	<!--		<script>-->
	<!--		window.__lc = window.__lc || {};-->
	<!--		window.__lc.license = 18920616;-->
	<!--		window.__lc.integration_name = "manual_onboarding";-->
	<!--		window.__lc.product_name = "livechat";-->
	<!--		;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))-->
	<!--	</script>-->
	<!--	<noscript><a href="https://www.livechat.com/chat-with/18920616/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>-->
	<!-- End of LiveChat code -->

	<!-- End of LiveChat code -->
	<!-- End of LiveChat code -->
	<!-- End of LiveChat code -->
	<!-- End of LiveChat code -->
	<script
		src="//code.jivosite.com/widget/fNvHA3AiqP"
		async></script>

	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<!-- Google tag (gtag.js) -->
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id=G-908VK3V379"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}
	gtag('js', new Date());

	gtag('config', 'G-908VK3V379');
	</script>

	<!-- Yandex.Metrika counter -->
	<!--	<script type="text/javascript" >-->
	<!--		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};-->
	<!--			m[i].l=1*new Date();-->
	<!--			for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}-->
	<!--			k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})-->
	<!--		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");-->

	<!--		window.ym(99212043, "init", {-->
	<!--			clickmap:true,-->
	<!--			trackLinks:true,-->
	<!--			accurateTrackBounce:true-->
	<!--		});-->
	<!--	</script>-->
	<!--	<noscript><div><img src="https://mc.yandex.ru/watch/99212043" style="position:absolute; left:-9999px;" alt="" /></div></noscript>-->
	<!-- /Yandex.Metrika counter -->

	<!-- prettier-ignore-end -->
	<!-- eslint-enable -->
{/if}

<QueryClientProvider client="{queryClient}">
	<div class="max-w-full bg-[#0d111d]">
		<main>
			{#if isLocaleReady}
				{#if !routesWithoutMenu.includes($page.url.pathname)}
					<Menu />
				{/if}
				{#if $isModalOpen}
					<AuthModal />
				{/if}
				<div class="mainContent">
					{#if !routesWithoutMenu.includes($page.url.pathname)}
						<Header />
					{/if}

					<slot />
				</div>
			{:else}
				<Test />
			{/if}
		</main>
		<Toaster />
	</div>
</QueryClientProvider>

<style>
main {
	font-family: 'Manrope', sans-serif;
	min-height: 100vh;
	height: fit-content;
	display: flex;
	width: 100%;
	overflow-x: hidden;
	position: relative;
}

.mainContent {
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	box-sizing: border-box;
	padding-left: var(--elements-padding);
	padding-right: var(--elements-padding);
}

@media screen and (max-width: 768px) {
	.mainContent {
		padding: 0 0.5rem;
		/* margin-right: var(--mobile-elements-padding);
		margin-left: var(--mobile-elements-padding); */
	}
}
</style>
