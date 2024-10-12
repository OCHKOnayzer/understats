<script lang="ts">
	import item1 from '../../assets/item1.png';
	import setings from '../../assets/setings.png';
	import home from '../../assets/home.png';
	import users from '../../assets/users.png';
	import mod from '../../assets/mod.png';
	import FAQ from '../../assets/FAQ.png';

	import activeItem1 from '../../assets/item1.png';
	import activeSetings from '../../assets/active/setings.png';
	import activeHome from '../../assets/active/home.png';
	import activeUsers from '../../assets/users.png';
	import activeMod from '../../assets/mod.png';
	import activeFAQ from '../../assets/FAQ.png';

	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let currentPath: string = '';

	onMount(() => {
		currentPath = window.location.pathname;
		console.log('Current path:', currentPath);
	});
</script>

<div class="menu_items">
	<a href="/" class="card_item" class:selected={currentPath === '/h1'}>
		<div class="image_box">
			<img src={currentPath === '/hl' ? activeItem1 : item1} alt="" />
		</div>
		<span class="item_name">{$t('menu.Place_bet')}</span>
	</a>

	<a href="/" class="card_item" class:selected={currentPath === '/'}>
		<div class="image_box">
			<img src={currentPath === '/' ? activeHome : home} alt="Домашняя" />
		</div>
		<span class="item_name">{$t('menu.Main')}</span>
	</a>

	<a href="/stats" class="card_item" class:selected={currentPath === '/stats'}>
		<div class="image_box">
			<img src={currentPath === '/stats' ? activeFAQ : FAQ} alt="Статистика" />
		</div>
		<span class="item_name">{$t('menu.Stats')}</span>
	</a>

	<a href="/profile" class="card_item" class:selected={currentPath === '/profile'}>
		<div class="image_box">
			<img src={currentPath === '/profile' ? activeUsers : users} alt="Профиль" />
		</div>
		<span class="item_name">{$t('menu.Profile')}</span>
	</a>

	<a href="/mods" class="card_item" class:selected={currentPath === '/mods'}>
		<div class="image_box">
			<img src={currentPath === '/mods' ? activeMod : mod} alt="Моды" />
		</div>
		<span class="item_name">{$t('menu.Mods')}</span>
	</a>

	<a href="/setings" class="card_item" class:selected={currentPath === '/setings'}>
		<div class="image_box">
			<img src={currentPath === '/setings' ? activeSetings : setings} alt="Настройки" />
		</div>
		<span class="item_name">{$t('menu.Setings')}</span>
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
		max-height: 25px;
		max-width: 25px;
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
</style>
