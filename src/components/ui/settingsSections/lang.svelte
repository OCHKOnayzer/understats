<script lang="ts">
import { t } from 'svelte-i18n';

import { modalComponent } from '$src/stores/modalStore';
import { selectedLang } from '$src/stores/languageStore';
import { setLanguage } from '$src/lib/i18n';

import { LangArr } from '../modal/langModal/lang';
let changeLang = false;

const openChangeLang = () => {
	changeLang = !changeLang;
	console.log(changeLang);
};

$: {
	if ($modalComponent === 'LangModal') {
		changeLang = false;
	}
}

const setLang = (lang: string) => {
	setLanguage(lang);
	openChangeLang();
};

const handleFocus = () => {
	changeLang = false;
};

document.addEventListener('focusin', (event) => {
	if (event.target instanceof HTMLInputElement) {
		handleFocus();
	}
});
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
		<span class="select-image {changeLang ? 'open-lang' : ''}"
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
					style="background-color: {$selectedLang === item.lang ? '#6660ff40' : ''}"
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
	width: 100%;
	border-radius: 10px;
	height: 70px;
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
	background-color: #20242f;
	width: 100%;
	border-radius: 5px;
	margin-top: 5px;
	overflow-y: hidden;
}
.modal-lang-wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 999;
}
.modal-lang {
	position: relative;
	width: 100%;
	height: 44px;
	border-bottom: 1px solid #363a45;
	transition: 400ms;
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
	z-index: 999;
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
	transition: transform 0.2s ease;
}
.open-lang {
	transform: rotate(180deg);
}
@media (max-width: 1100px) {
	/* .user_email, */
	.input_element,
	.item_settings_info p:nth-child(1) {
		font-size: 15px;
	}
	.selected_element {
		height: 60px;
	}
	.item-w {
		width: 100%;
	}
}
@media screen and (max-width: 768px) {
	.all-lang {
		height: 30vh;
		overflow-y: auto;
	}
	.setings_item {
		height: 100px;
	}
	.selected_element {
		height: 50%;
	}
	.lang {
		margin-bottom: 3px;
		color: white;
	}
}
</style>
