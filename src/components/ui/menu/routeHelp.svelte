<script lang="ts">
	import news from '../../../../static/assets/news.png';
	import FAQ from '../../../../static/assets/FAQ.png';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let currentPath: string = '';

	onMount(() => {
		currentPath = window.location.pathname;
	});

	$: isActive = (href: string): boolean => currentPath === href;
</script>

<div class="menu_items">
	<a href="/" class="card_item" class:selected={isActive('/FAQ')}>
		<div class="image_box">
			<img src={FAQ} alt="" />
		</div>
		<span class="item_name">{$t('menu.Help')}</span>
	</a>
	<a href="/" class="card_item" class:selected={isActive('/news')}>
		<div class="image_box">
			<img src={news} alt="" />
		</div>
		<span class="item_name">{$t('menu.News')}</span>
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
