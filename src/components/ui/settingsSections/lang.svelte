<script lang="ts">
import { t } from 'svelte-i18n';

import { selectedLang } from '$src/stores/languageStore';
import { setLanguage } from '$src/lib/i18n';

import { LangArr } from '../modal/langModal/lang';
let changeLang = false;
const openChangeLang = () => {
	changeLang = !changeLang;
	console.log(changeLang);
};
const setLang = (lang: string) => {
	setLanguage(lang);
};
</script>

<div class="setings_item item-w lang">
	<div class="item_settings_info">
		<p class="settings_name">{$t('lang.app_lang')}</p>
	</div>
	<button
		on:click="{openChangeLang}"
		class="selected_element input_element lang-button">
		<div class="lang-conteiner">
			<img
				class="lang-image"
				src="{`assets/langs/${$selectedLang}.svg`}"
				alt="{`${$selectedLang} flag`}" />
			<span class="lang-name">{$t(`lang.${$selectedLang}`)}</span>
		</div>
		<span class="select-image"
			><img
				src="assets/arrowSell.svg"
				alt="" /></span>
	</button>
	<div
		class="all-lang"
		style="display: {changeLang ? 'block' : 'none'}">
		<div class="modal-lang-wrapper">
			{#each LangArr as item}
				<button
					on:click="{() => setLang(item.lang)}"
					class="modal-lang">
					<img
						class="lang-image modal-lang-image"
						src="{item.image}"
						alt="" />
					<span class="lang-name">{$t(item.name)}{item.flag}</span>
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
.setings_item {
	height: 12vh;
	border-radius: 10px;
}
.input_element {
	border: unset;
	font-size: 20px;
	padding-left: 10px;
	outline: none;
}
.selected_element {
	background-color: #20242f;
	color: #707f96;
	width: 98%;
	border-radius: 10px;
	height: 60%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.item-w {
	width: 33%;
}
.settings_name {
	margin-top: 10px;
	margin-bottom: 10px;
}
.item_settings_info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.input_element {
	border: unset;
	font-size: 20px;
	padding-left: 10px;
	outline: none;
}
.lang-button {
	display: flex;
	justify-content: space-between;
}
.all-lang {
	position: absolute;
	height: 35vh;
	background-color: #20242f;
	width: 98%;
	border-radius: 5px;
	margin-top: 5px;
	overflow: hidden;
}
.modal-lang-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
}
.modal-lang {
	width: 100%;
	height: 44px;
	border-bottom: 1px solid #363a45;
	transition: 400ms;
	z-index: 5;
	display: flex;
	justify-content: left;
	align-items: center;
}
.modal-lang-image {
	margin: 10px;
}
.modal-lang:hover {
	background-color: #6660ff;
}
.lang {
	position: relative;
}
.lang-conteiner {
	display: flex;
	align-items: center;
}
.lang-image {
	height: 24px;
	width: 24px;
}
.lang-name {
	margin-left: 5px;
}
.select-image {
	margin-right: 10px;
}
</style>
