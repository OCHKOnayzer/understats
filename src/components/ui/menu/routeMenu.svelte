<script lang="ts">
	import { t } from 'svelte-i18n';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let currentPath = '';

	onMount(() => {
		currentPath = window.location.pathname;
	});

	afterNavigate(() => {
		currentPath = window.location.pathname;
	});
</script>

<div class="menu_items">
	<a
		href="/bet"
		class="card_item"
		class:selected={currentPath === '/bet'}>
		<div class="image_box">
			<img
				src={currentPath === '/bet'?'assets/menu/active/bet.png':'assets/menu/menuElements/bet.png'}
				alt={$t('menu.Place_bet')} />
		</div>
		<span class="item_name">{$t('menu.Place_bet')}</span>
	</a>

	<a
		href="/"
		class="card_item"
		class:selected={currentPath === '/'}>
		<div class="image_box">
			<img
				src={currentPath === '/'?'assets/menu/active/home.png':'assets/menu/menuElements/home.png'}
				alt={$t('menu.Main')} />
		</div>
		<span class="item_name">{$t('menu.Main')}</span>
	</a>

	<a
		href="/stats"
		class="card_item"
		class:selected={currentPath === '/stats'}>
		<div class="image_box">
			<img
				src={currentPath === '/stats'?'assets/menu/active/FAQ.png':'assets/menu/menuElements/FAQ.png'}
				alt={$t('menu.Stats')} />
		</div>
		<span class="item_name">{$t('menu.Stats')}</span>
	</a>

	<a
		href="/accounts"
		class="card_item"
		class:selected={currentPath === '/accounts'}>
		<div class="image_box">
			<img
			src={currentPath === '/accounts'?'assets/menu/active/users.png':'assets/menu/menuElements/users.png'}
				alt={$t('menu.Accounts')} />
		</div>
		<span class="item_name">{$t('menu.Accounts')}</span>
	</a>

	<a
		href="/extensions"
		class="card_item"
		class:selected={currentPath === '/extensions'}>
		<div class="image_box">
			<img
			src={currentPath === '/extensions'?'assets/menu/active/mod.png':'assets/menu/menuElements/mod.png'}
				alt={$t('menu.Mods')} />
		</div>
		<span class="item_name">{$t('menu.Mods')}</span>
	</a>

	<a
		href="/setings"
		class="card_item"
		class:selected={currentPath === '/setings'}>
		<div class="image_box">
			<img
			src={currentPath === '/setings'?'assets/menu/active/setings.png':'assets/menu/menuElements/setings.png'}
				alt={$t('menu.Setings')} />
		</div>
		<span class="item_name">{$t('menu.Setings')}</span>
	</a>

	<a
		href="/faq"
		class="card_item"
		class:selected={currentPath === '/faq'}>
		<div class="image_box">
			<img
				src={currentPath === '/faq'?'assets/menu/active/FAQ.png':'assets/menu/menuElements/FAQ.png'}
				alt={$t('menu.Help')} />
		</div>
		<span class="item_name">{$t('menu.Help')}</span>
	</a>
</div>

<style>
	.menu_items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: fit-content;
	}
	.card_item {
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: left;
		width: 100%;
		border-radius: 10px;
		transition: 300ms;
		color: gray;
		text-decoration: none;
	}
	.image_box {
		max-height: 30px;
		max-width: 30px;
		margin-right: 10px;
		padding-left: 10px;
	}
	.image_box img {
		height: 100%;
		width: 100%;
	}
	.card_item:hover {
		cursor: pointer;
	}
	.selected {
		background-color: #6660ff;
	}
	.selected span {
		color: white;
	}
	.item_name {
		font-size: 14px;
	}
	@media screen and (max-height: 800px) {
		.card_item {
			height: 40px;
			padding: 5px;
		}
		.image_box {
			max-height: 20px;
			max-width: 20px;
		}
	}
</style>
