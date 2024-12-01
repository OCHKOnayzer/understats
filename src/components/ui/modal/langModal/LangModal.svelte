<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang, langSel } from '$src/stores/HeaderStores';
import { setLanguage } from '$src/lib/i18n';

import LangTitle from './title/langTitle.svelte';
import { LangArr } from './lang';

const setLang = (lang: string) => {
	setLanguage(lang);
	selectedLang(lang);
};
</script>

<div class="lang-container">
	<div class="lang-modal">
		<div class="lang-wrapper">
			<LangTitle />
			<div class="sel-lang-wrapper">
				{#each LangArr as item}
					<button
						class="sel-lang-btn {item.lang === $langSel ? 'active' : ''}"
						on:click="{() => setLang(item.lang)}">
						<div class="image-wrapper">
							<img
								src="{item.image}"
								alt="" />
						</div>
						<span>{$t(item.name)}{item.flag}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
.lang-container {
	display: flex;
	justify-content: right;
	height: 100vh;
	z-index: 9998;
}
.lang-modal {
	max-width: 26vw;
	min-height: 40vh;
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
.lang-wrapper {
	width: 90%;
	height: 75%;
	margin-top: 10px;
	margin-bottom: 10px;
}
.sel-lang-wrapper {
	display: flex;
	color: white;
	flex-wrap: wrap;
	margin-top: 20px;
	gap: 10px;
	justify-content: space-between;
}

.sel-lang-btn {
	color: white;
	display: flex;
	align-items: center;
	flex: 1 1 calc(33.33% - 10px);
	min-width: 150px;
	background-color: #171b26;
	padding: 8px;
	border-radius: 5px;
	border: 1px solid #171b26;
	font-size: 14px;
	box-sizing: border-box;
}

.image-wrapper {
	margin-right: 10px;
}

.active {
	border: 1px solid #6660ff;
	background-color: #6660ff40;
}

@media (max-width: 1370px) {
	.sel-lang-wrapper {
		margin-bottom: 10px;
	}
}
</style>
