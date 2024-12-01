<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang, langSel } from '$src/stores/HeaderStores';
import { setLanguage } from '$src/lib/i18n';

import { SupportItem } from './support';
import SupportTitle from './title/supportTitle.svelte';

const setLang = (lang: string) => {
	setLanguage(lang);
	selectedLang(lang);
};
</script>

<div class="support-container">
	<div class="support-modal">
		<div class="support-wrapper">
			<SupportTitle />
			<div class="support-content">
				<span class="support-description">
					{$t('support_modal.description')}
				</span>
				<div class="support-button-wrapper">
					{#each SupportItem as item}
						<a
							class="support-button"
							href="{item.href}">
							<img
								src="{item.image}"
								alt="{item.alt}" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
.support-container {
	display: flex;
	justify-content: right;
	height: 100vh;
	z-index: 9998;
}
.support-modal {
	width: 25vw;
	min-height: 20vh;
	height: fit-content;
	background-color: #0d111d;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	position: relative;
	top: 10vh;
	right: 1rem;
	border: 1px solid #363a45;
}
.support-wrapper {
	width: 90%;
	height: 80%;
}
.support-content {
	margin: 10px;
}
.support-description {
	color: #718096;
}
.support-button-wrapper {
	width: 100%;
	display: flex;
	margin-top: 20px;
}
.support-button {
	height: 50px;
	width: 50px;
	display: block;
	background-color: #171b26;
	border: 1px solid #363a45;
	margin-right: 10px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.support-button img {
	height: 50%;
	width: 50%;
}
.active {
	border: 1px solid #6660ff;
	background-color: #6660ff40;
}
</style>
