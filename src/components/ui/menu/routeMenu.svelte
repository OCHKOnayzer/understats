<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

let currentPath = window.location.pathname;

onMount(() => {
	const updatePath = () => {
		currentPath = window.location.pathname;
	};

	window.addEventListener('popstate', updatePath);

	return () => {
		window.removeEventListener('popstate', updatePath);
	};
});
</script>

<div class="menu_items">
	<a
		href="/h1"
		class="card_item"
		class:selected={currentPath === '/h1'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/bet.png"
				alt="" />
		</div>
		<span class="item_name">{$t('menu.Place_bet')}</span>
	</a>

	<a
		href="/"
		class="card_item"
		class:selected={currentPath === '/'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/home.png"
				alt="Домашняя" />
		</div>
		<span class="item_name">{$t('menu.Main')}</span>
	</a>

	<a
		href="/accounts"
		class="card_item"
		class:selected={currentPath === '/accounts'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/users.png"
				alt="Профиль" />
		</div>
		<span class="item_name">{$t('menu.Accounts')}</span>
	</a>

	<a
		href="/stats"
		class="card_item"
		class:selected={currentPath === '/stats'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/FAQ.png"
				alt="Статистика" />
		</div>
		<span class="item_name">{$t('menu.Stats')}</span>
	</a>

	<a
		href="/extensions"
		class="card_item"
		class:selected={currentPath === '/extensions'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/mod.png"
				alt="Моды" />
		</div>
		<span class="item_name">{$t('menu.Mods')}</span>
	</a>

	<a
		href="/setings"
		class="card_item"
		class:selected={currentPath === '/setings'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/setings.png"
				alt="Настройки" />
		</div>
		<span class="item_name">{$t('menu.Setings')}</span>
	</a>

	<a
		href="/faq"
		class="card_item"
		class:selected={currentPath === '/faq'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/FAQ.png"
				alt="Настройки" />
		</div>
		<span class="item_name">{$t('menu.Help')}</span>
	</a>

	<a
		href="/news"
		class="card_item"
		class:selected={currentPath === '/news'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/news.png"
				alt="Новости" />
		</div>
		<span class="item_name">{$t('menu.News')}</span>
	</a>

	<a
		href="/chat"
		class="card_item"
		class:selected={currentPath === '/chat'}>
		<div class="image_box">
			<img
				src="assets/menu/menuElements/chat.png"
				alt="Чат" />
		</div>
		<span class="item_name">{$t('menu.Chat')}</span>
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
