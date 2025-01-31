<script lang="ts">
import { onMount } from 'svelte';
import { t } from 'svelte-i18n';

import { toggleChat, ifWindow } from '$src/utils/functions/chat';
import { closeModal } from '$src/stores/modalStore';

import { SocialLink } from './social';

const closPayModal = () => {
	closeModal();
};

onMount(() => {
	ifWindow();
});
</script>

<div
	class="social_container"
	on:click="{closeModal}"
	role="button"
	tabindex="0"
	on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
	<div
		class="social_modal"
		on:click|stopPropagation
		role="button"
		tabindex="0"
		on:keydown="{(e) => e.key === 'Escape' && closeModal()}">
		<div class="social_wrapper">
			<div class="social_title">
				{$t('other.contacts')}
				<button
					class="close"
					on:click="{closPayModal}"></button>
			</div>
			<div class="link_wrapper">
				<div class="link_item_container">
					{#each SocialLink as item}
						<div class="link_item">
							{item.name}
							<a
								class="color_link"
								target="_blank"
								href="{item.href}">
								{item.link}
							</a>
							<!-- <div class="copy_message">{$t(copy)}</div> -->
						</div>
					{/each}
				</div>
				<div class="social_item_container">
					<a
						class="social_item active"
						target="_blank"
						href="https://t.me/OneKeepBet_bot">
						<img
							src="assets/social/support_telegram.svg"
							alt="" />
						{$t('other.support')}
					</a>
					<div class="social_item nactiv">
						<img
							src="assets/social/support_discord.svg"
							alt="" />
						{$t('other.support')}
					</div>
				</div>
				<button
					on:click="{toggleChat}"
					class="open-chat">
					{$t('other.chat_open')}
				</button>
			</div>
		</div>
	</div>
</div>

<style>
.social_container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	color: white;
	cursor: default;
	animation: fade-in 0.3s ease-out;
}

.social_modal {
	width: 525px;
	background-color: #20242f;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 32px;
	cursor: default;
	transform: translateY(-20px);
	animation: slide-in 0.3s ease-out forwards;
}

.social_title {
	display: flex;
	height: 102px;
	width: 100%;
	justify-content: space-between;
	font-size: 30px;
	font-weight: 500;
	align-items: center;
}

.social_wrapper {
	width: 100%;
	height: 80%;
	margin-left: 36px;
	margin-right: 36px;
}

.link_wrapper {
	height: fit-content;
}

.close {
	position: relative;
	width: 40px;
	height: 40px;
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

.link_item_container {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-bottom: 26px;
}

.link_item {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 48%;
}

.color_link {
	color: #6660ff;
	cursor: pointer;
	position: relative;
}

.copy_message {
	opacity: 0;
	position: absolute;
	top: 100%;
	left: 0;
	margin-top: 5px;
	background: #0d111d;
	color: white;
	font-size: 12px;
	padding: 5px 10px;
	border-radius: 4px;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	white-space: nowrap;
	z-index: 5;
	transition: opacity 0.3s ease, transform 0.3s ease;
	transform: translateY(-10px);
}

.color_link:hover + .copy_message {
	opacity: 1;
	transform: translateY(0);
}

.social_item_container {
	display: flex;
	align-items: center;
	width: 100%;
	gap: 10px;
}

.social_item {
	height: 56px;
	background-color: var(--table-color);
	width: 49%;
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
	gap: 10px;
	transition: 300ms;
}

.active:hover {
	background-color: hsl(222, 17%, 28%);
}

.nactiv {
	background-color: #363a4592;
	cursor: not-allowed;
	color: var(--inactive-elements);
}
.open-chat {
	height: 56px;
	width: 100%;
	border: 1px solid var(--inactive-elements);
	border-radius: 16px;
	margin-top: 10px;
	margin-bottom: 35px;
	transition: 300ms;
}
.open-chat:hover {
	border-color: #9aa8bd;
}
@media screen and (max-width: 800px) {
	.social_container {
		height: 100dvh;
		align-items: flex-end;
	}
	.social_modal {
		width: 100vw;
		border-radius: 20px 20px 0 0;
		transform: translateY(100%);
		animation: slideUp 0.3s ease-out forwards;
	}
	.social_item_container {
		flex-direction: column;
	}
	.social_item {
		width: 100%;
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
