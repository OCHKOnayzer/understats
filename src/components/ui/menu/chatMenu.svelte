<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';
import { openModal,modalComponent } from '$src/stores/modalStore';

function test(){ 
	openModal('SocialModal')
	console.log($modalComponent)
}

</script>

<button
	on:click="{test}"
	class="flex h-auto w-full flex-col justify-center rounded-lg
    {$modalComponent === 'SocialModal' ? 'bg-activeElements' : 'bg-[#31384A]'}">
	<div class="flex h-[50px] items-center rounded-lg text-gray-500 no-underline transition duration-300 hover:cursor-pointer">
		<div class="ml-[12px] mr-2.5 flex h-[20px] w-[20px] items-center justify-center">
			<img
				src="{$modalComponent === 'SocialModal' ? 'assets/menu/menuElements/cont.svg' : 'assets/menu/active/cont.svg'}"
				alt="{$t('{item.title}')}"
				class="h-full w-full object-contain" />
		</div>
		<span class="flex items-center text-sm text-white">
			{$t('other.сontacts')}
		</span>
	</div>
</button>
