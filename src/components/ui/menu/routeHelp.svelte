<script lang="ts">
import { onMount } from 'svelte';

import UserInfo from './userInfo/UserInfo.svelte';
import ChatMenu from './chatMenu.svelte';
import { SocialRoutes } from './items/LinkItems';
</script>

<div class="w-full">
	<ChatMenu />
	<UserInfo />
	<div class="relative mt-4 flex h-full w-full items-center justify-between">
		{#each SocialRoutes as items}
			<a
				href="{items.href}"
				target="_blank"
				class="group relative h-[25px] w-[25px]">
				<img
					src="{items.img1}"
					alt="{items.title}"
					class="absolute h-full w-full object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
				<img
					src="{items.img2}"
					alt="{items.title}"
					class="absolute h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			</a>
		{/each}
	</div>
</div>
