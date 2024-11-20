<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { afterNavigate } from '$app/navigation';

let currentPath = '';

type MenuItem = {
	href: string;
	img1: string;
	img2: string;
	title: string;
};

const menuArr: MenuItem[] = [
	/*
	{
		href: '/',
		img1: 'assets/menu/active/home.png',
		img2: 'assets/menu/menuElements/home.png',
		title: 'menu.Main'
	},
	{
		href: '/bet',
		img1: 'assets/menu/active/bet.png',
		img2: 'assets/menu/menuElements/bet.png',
		title: 'menu.Place_bet'
	},
	
	 */
	{
		href: '/stats',
		img1: 'assets/menu/active/mod.png',
		img2: 'assets/menu/menuElements/mod.png',
		title: 'menu.Stats'
	},
	{
		href: '/accounts',
		img1: 'assets/menu/active/users.png',
		img2: 'assets/menu/menuElements/users.png',
		title: 'menu.Accounts'
	},
	{
		href: '/extensions',
		img1: 'assets/menu/active/mod.png',
		img2: 'assets/menu/menuElements/mod.png',
		title: 'menu.Mods'
	},
	{
		href: '/setings',
		img1: 'assets/menu/active/setings.png',
		img2: 'assets/menu/menuElements/setings.png',
		title: 'menu.Setings'
	},
	{
		href: '/faq',
		img1: 'assets/menu/active/FAQ.png',
		img2: 'assets/menu/menuElements/FAQ.png',
		title: 'menu.Help'
	}
];

onMount(() => {
	currentPath = window.location.pathname;
});

afterNavigate(() => {
	currentPath = window.location.pathname;
});
</script>

<div class="menu_items">
	{#each menuArr as item}
		<a
			href="{item.href}"
			class="card_item"
			class:selected="{currentPath === item.href}">
			<div class="image_box">
				<img
					src="{currentPath === item.href ? item.img1 : item.img2}"
					alt="{$t('{item.title}')}" />
			</div>
			<span class="item_name">{$t(item.title)}</span>
		</a>
	{/each}
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
