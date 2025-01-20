<script lang="ts">
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import { useBreakpoint } from '$src/hooks/useBreakpoint';
import { currentUser } from '$src/stores/modalStore';
import { navigateToExtension } from '$src/utils/functions/navigate';
import { supportClick } from '$src/utils/functions/supportClick';

import AuthDemoButton from '../../widgets/demo/demoButtons/AuthDemoButton.svelte';
import Badge from '../badge/badge.svelte';
import Button from '../button/button.svelte';

interface TableNoDataProps {
	title: string;
	description: string;
	variant: 'accounts' | 'stats';
}

let { title, description, variant }: TableNoDataProps = $props();
const items = ['not.install', 'not.open', 'not.sign', 'not.last'];

let isAuthenticated = $derived(!!$currentUser);
const { isMobile } = useBreakpoint(400);
</script>

{#if !isAuthenticated}
	<AuthDemoButton />
{:else if $isMobile}
	<div class="mobile-message flex flex-col items-center justify-center gap-4 p-6 text-center text-white">
		<img
			src="/icons/PC.svg"
			alt="" />
		<h2 class="text-xl font-semibold">{$t('not.pc')}</h2>
		<p class="text-sm">{$t('not.pc_desc')}</p>
	</div>
{:else}
	<div class="flex max-w-[500px] flex-col items-start gap-[24px] rounded-[32px] bg-[#171B26] p-[32px] text-white">
		<div>
			<h2 class="text-[28px] leading-[32px]">{title}</h2>
			<h3 class="max-w-[440px] text-[15px] leading-[22px]">{description}</h3>
		</div>
		<div class="flex flex-col gap-[16px]">
			{#each variant === 'accounts' ? items.slice(0, 3) : items as item, i}
				<div class="flex items-center gap-[12px]">
					<Badge variant="{'statsNot'}">{i + 1}</Badge>
					<h2>{$t(item)}</h2>
				</div>
			{/each}
		</div>
		<div class="inline-flex flex-col gap-[16px]">
			<div>
				<Button
					onclick="{navigateToExtension}"
					class="h-[56px] w-full !py-[16px]"
					variant="not">{$t('not.install_ext')}</Button>
			</div>
			<div class="flex items-center gap-[2px]">
				<Button
					onclick="{supportClick}"
					class="h-[56px]"
					variant="transparent">{$t('not.help')}</Button>
				<Button
					class="h-[56px]"
					variant="transparent">{$t('not.write')}</Button>
			</div>
		</div>
	</div>
{/if}

<style>
.mobile-message {
	background: #171b26;
	border-radius: 16px;
	margin: 0 auto;
}
</style>
