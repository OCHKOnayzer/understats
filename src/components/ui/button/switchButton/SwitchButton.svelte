<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation'; // Импортируем goto
	import { t } from 'svelte-i18n';
	
	export let switch_modal: any;
	export let switch_text: string;
	let isMobile = false;
	
	function checkScreenWidth() {
		isMobile = window.innerWidth <= 768;
	}
	
	onMount(() => {
		checkScreenWidth();
		window.addEventListener('resize', checkScreenWidth);
		return () => window.removeEventListener('resize', checkScreenWidth);
	});
	
	function handleClick() {
		if (typeof switch_modal === 'function') {
			console.log('Calling switch_modal function'); // Отладочный вывод
			switch_modal(); // Вызов функции
		} else {
			console.error('switch_modal is not a function', switch_modal);
		}
	}
	</script>
	
	<div class="switch_wrapper">
		{#if isMobile}
		<a href={switch_modal}>	{$t(switch_text)}</a>
		{:else}
		<button on:click="{handleClick}">
			{$t(switch_text)}
		</button>
		{/if}
		
	</div>
	
	<style>
	.switch_wrapper button {
		color: #01d2f9;
		text-decoration: underline;
		background: none;
		border: none;
		cursor: pointer;
		transition: 400ms;
		padding-right: 5px;
		font-size: 14px;
	}
	@media screen and (max-width: 768px) {
		.switch_wrapper {
			width: 100%;
			height: 8vh;
			margin-right: 0px;
		}
		.switch_wrapper button,a {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 100%;
			border-radius: 16px;
			color: white;
			text-decoration: unset;
			background-color: #31384a;
			transition: 400ms;
			font-size: 15px;
		}
	}
	</style>