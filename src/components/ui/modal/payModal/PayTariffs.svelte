<script lang="ts">
import { t } from 'svelte-i18n';

import { closeModal, setCurrentTariffs, currentTariffs, currentLimits, currentAccounst } from '$src/stores/modalStore';

import { PayItem } from './Pay';

const closPayModal = () => {
	closeModal();
	setCurrentTariffs('');
};
</script>

<div class="pay_container">
	<div class="pay_modal">
		<div class="pay_wrapper">
			<div class="title">
				<span>{$t('other.pay_method')}</span>
				<button
					class="close"
					on:click="{closPayModal}"></button>
			</div>
			<div class="tariffs-name">
				<div class="tariffs-name-container">
					{$currentTariffs}:
					{#if $currentAccounst || $currentLimits}
						{$currentAccounst}
						{$t('tariffs.limits_acc')}
						{$currentLimits}
						{$t('tariffs.limits_bets')}
					{:else}
						{$t('tariffs.no_limits')}
					{/if}
				</div>
			</div>
			<div class="pay_method_wrapper">
				{#each PayItem as item}
					<div class="pay_method_container">
						<button class="pay_method_content">
							<img
								src="{item.payMethods}"
								alt="" />
							<span>{$t(item.payWay)}</span>
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
.pay_container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	animation: fade-in 0.3s ease-out;
}
.pay_modal {
	width: 22vw;
	min-height: 350px;
	height: fit-content;
	background-color: #252935;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	transform: translateY(-20px);
	animation: slide-in 0.3s ease-out forwards;
}
.pay_wrapper {
	width: 90%;
	height: 80%;
	color: white;
}
.title {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.title span:nth-child(1) {
	font-size: 25px;
	font-weight: 500;
}
.close {
	position: relative;
	width: 40px;
	height: 40px;
	border: 2px solid #718096;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	cursor: pointer;
	transition: 400ms;
}
.close::before,
.close::after {
	content: '';
	position: absolute;
	width: 55%;
	height: 2px;
	background-color: #718096;
	transition: 400ms;
}
.close::before {
	transform: rotate(45deg);
}
.close::after {
	transform: rotate(-45deg);
}
.close:hover {
	border-color: #ffffff;
}
.close:hover::before,
.close:hover::after {
	background-color: #ffffff;
}
.tariffs-name {
	margin-top: 20px;
	height: 44px;
	width: 100%;
	background-color: #363a45;
	border-radius: 12px;
}
.tariffs-name-container {
	width: 90%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
}
.pay_method_wrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	height: fit-content;
}
.pay_method_container {
	height: 84px;
	background-color: #171b26;
	width: 100%;
	border-radius: 16px;
	margin-bottom: 10px;
}
.pay_method_content {
	width: 90%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-grow: 0;
	align-items: flex-start;
}
.pay_method_content span {
	margin-top: 10px;
	font-size: 14px;
}
.pay_method_content img {
	height: 24px;
	min-width: 120px;
	flex-shrink: 0;
	object-fit: contain;
}
@media screen and (max-width: 800px) {
	.pay_container {
		align-items: flex-end;
	}
	.pay_modal {
		width: 100vw;
		border-radius: 20px 20px 0 0;
		transform: translateY(100%);
		animation: slideUp 0.3s ease-out forwards;
	}
	.close {
		border: unset;
	}
	.close::before,
	.close::after {
		background-color: white;
	}
}
@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slide-in {
	from {
		transform: translateY(-20px);
	}
	to {
		transform: translateY(0);
	}
}
@keyframes slideUp {
	from {
		transform: translateY(100%);
	}
	to {
		transform: translateY(0);
	}
}
</style>
