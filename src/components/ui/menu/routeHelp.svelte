<script lang="ts">
import { onMount } from 'svelte';

import { currentUser } from '$src/stores/modalStore';
import { langSel } from '$src/stores/HeaderStores';
import { useUserProfile } from '$src/services/auth/useProfile';

import UserInfo from './userInfo/UserInfo.svelte';
import ChatMenu from './chatMenu.svelte';
import { SocialRoutes } from './items/LinkItems';
let { query } = useUserProfile();
</script>

<div class="w-full">
	<ChatMenu />
	{#if $query.data}
		<UserInfo />
	{/if}
	<!-- <div class="relative mt-4 flex h-full w-full items-center justify-between">
		{#each SocialRoutes as items}
			<a
				href="{$langSel === 'ru' && items.hrefRu ? items.hrefRu : items.href}"
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
	</div> -->
</div>
