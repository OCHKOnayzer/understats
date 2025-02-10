<script>
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { currentUserActiveTariff } from '$src/stores/tariffsStore';
import { isMobile, initializeScreenWidthListener } from '$src/stores/isMobile';

import Test from '../test.svelte';
import Spinner from '../spinner/Spinner.svelte';

onMount(() => {
	initializeScreenWidthListener();
});
</script>

{#if $currentUserActiveTariff}
	<div class="layout">
		<div class="tariff">
			<div class="tariff_info_container">
				<div class="info_wrapper">
					{#if $isMobile}
						<div class="tariff_title_mobile">
							{$currentUserActiveTariff.tariffName}
						</div>
					{:else}
						<span class="ellipsis">
							{$currentUserActiveTariff.tariffName}&nbsp;{$t('other.tariff')}
							({$currentUserActiveTariff?.pricePerMonth}&nbsp;/&nbsp;{$t('other.in_month')})
						</span>
					{/if}
					{#if !$isMobile}
						<div class="limits">
							{$currentUserActiveTariff.accounts}&nbsp;
							<span>{$t('other.acc')}</span>&nbsp;/&nbsp;
							{$currentUserActiveTariff.betsPerMonth}&nbsp;
							<span>{$t('tariffs.limits_bets')}</span>
						</div>
					{/if}
					<div class="ellipsis">
						{$t(`tariffs.${$currentUserActiveTariff.tariffName.toLocaleLowerCase()}`)}
					</div>
					{#if $isMobile}
						<span class="tariff_end"> 10.10.2025 </span>
					{/if}
					{#if $isMobile}
						<div class="mobile_tariff_item">
							{$currentUserActiveTariff.accounts}&nbsp;
							<span>{$t('tariffs.limits_acc')}</span>
							{$currentUserActiveTariff.betsPerMonth}
							<span>{$t('tariffs.limits_bets')}</span>
						</div>
					{/if}
				</div>
				{#if !$isMobile}
					<div>
						<img
							src="assets/tariffs/sub.svg"
							alt="" />
					</div>
				{/if}
			</div>
		</div>
		<div class="tariff_info">
			<div class="info_item">
				<div class="title_item ellipsis">{$currentUserActiveTariff.datePurchased}</div>
				<div class="item_desc ellipsis">{$t('other.last_pay')}</div>
			</div>
			<div class="info_item">
				<div class="title_item ellipsis">{$currentUserActiveTariff.betsCount}</div>
				<div class="item_desc ellipsis">{$t('other.all_pays')}</div>
			</div>
			<div class="info_item">
				<div class="title_item ellipsis">{$currentUserActiveTariff.accountsCount}</div>
				<div class="item_desc ellipsis">{$t('other.all_acc')}</div>
			</div>
		</div>
	</div>
{:else}
	<div class="flex h-[calc(100vh-280px)] flex-col items-center justify-center p-4 text-white">
		<span class="loading-spinner mb-3"></span>
		<h2>{$t('stats.loading_data')}</h2>
	</div>
{/if}

<style>
.layout {
	width: 100%;
	display: flex;
	gap: var(--elements-padding);
	margin-bottom: var(--elements-padding);
	color: white;
	height: fit-content;
}

.tariff {
	background-color: #171b26;
	border-radius: 5px;
	width: 35%;
	height: 160px;
}

.tariff_info_container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: var(--elements-padding);
	padding-left: var(--elements-padding);
	height: 100%;
}

.info_wrapper {
	width: 90%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.limits {
	color: #718096;
}

.tariff_info {
	width: 65%;
	height: 160px;
	display: flex;
	gap: var(--elements-padding);
}

.info_item {
	height: 100%;
	width: 33%;
	background-color: #171b26;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: var(--elements-padding);
	padding-right: var(--elements-padding);
	border-radius: 5px;
}

.title_item {
	font-size: 30px;
	font-weight: 700;
}

.item_desc {
	font-size: 14px;
	color: #9d9d9d;
}

.ellipsis {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
	display: block;
}
.ellipsis-multi {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.loading-spinner {
	display: inline-block;
	width: 2rem;
	height: 2rem;
	border: 3px solid #6660ff;
	border-top: 3px solid transparent;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}
.tariff_title_mobile {
	width: 100%;
	text-align: center;
	font-size: 24px;
	font-weight: 600;
}
.mobile_tariff_item {
	background-color: #363a45;
	border-radius: 8px;
	text-align: center;
	width: 100%;
	padding-top: 8px;
	padding-bottom: 8px;
	margin-top: 8px;
}
.tariff_end {
	color: #01d2f9;
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@media screen and (max-width: 800px) {
	.layout {
		flex-direction: column;
	}
	.tariff {
		width: 100%;
		border-radius: 24px;
	}
	.tariff_info_container {
		justify-content: center;
	}
	.mobile_desc {
		font-size: 14px;
	}
	.info_wrapper {
		flex-direction: column;
		align-items: center;
	}
	.tariff_info {
		width: 100%;
		display: flex;
		gap: var(--elements-padding);
		overflow-x: auto;
		white-space: nowrap;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		padding-bottom: 10px;
		height: fit-content;
	}

	.info_item {
		flex: 0 0 auto;
		width: 80%;
		scroll-snap-align: center;
		height: 80px;
		border-radius: 16px;
	}
	.title_item,
	.item_desc {
		font-size: 14px;
	}
}
</style>
