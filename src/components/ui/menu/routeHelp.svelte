<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';
import UserInfo from './userInfo/UserInfo.svelte';

let currentPath = '';

onMount(() => {
	currentPath = window.location.pathname;
});

</script>

<div class="social">
	<UserInfo/>
	<div class="social_wrapper">
		<a href="/" target="_blank" class="social_item">
			<img src="assets/social/telegram.svg" alt="">
		</a>
		<a href="/" target="_blank" class="social_item">
			<img src="assets/social/active/instagram.svg" alt="">
		</a>
		<a href="/" target="_blank" class="social_item">
			<img src="assets/social/active/discord.svg" alt="">
		</a>
		<a href="/" target="_blank" class="social_item">
			<img src="assets/social/active/facebook.svg" alt="">
		</a>
		<a href="/" target="_blank" class="social_item">
			<img src="assets/social/active/youtube.svg" alt="">
		</a>
	</div>
</div>

<style>
.social {
	width: 100%;
}

.social_wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between; 
	height: 100%;
	width: 100%;
	margin-top: 15px;
}

.social_item {
	width: 25px;
	height: 25px;
}

.social_item img {
	height: 100%;
	width: 100%;
}
</style>
