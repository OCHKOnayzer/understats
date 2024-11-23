<script lang="ts">
import { t, locale } from 'svelte-i18n';

import { headerTitle } from '$src/stores/HeaderStores';
import { openModal } from '$src/stores/modalStore';
console.log(locale);
</script>

<div class="header">
	<div class="headerItem">
		<div class="flexConteiner">
			<div class="title">
				<p>{$t($headerTitle)}</p>
			</div>
			<div class="buttonConteiner">
				<div class="btnWrapper">
					<button on:click="{() => openModal('LangModal')}">
						<span class="lang">ENG</span>
					</button>
				</div>
				<div class="btnWrapper">
					<button>
						<img
							src="assets/header/support.png"
							alt="" />
					</button>
				</div>
				<div class="btnWrapper">
					<button>
						<img
							src="assets/header/nname.png"
							alt="" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
.header {
	height: fit-content;
	box-sizing: border-box;
	padding-top: 10px;
	width: 98%;
	margin: 0 auto;
	position: relative;
	z-index: 9998;
}

.headerItem {
	height: 8vh;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	color: white;
	background: #171b26;
	border-radius: 8px;
}

.flexConteiner {
	display: flex;
	height: 100%;
	width: 100%;
	padding: 0 0.05% 0 1%;
	justify-content: space-between;
}

.title {
	display: flex;
	align-items: center;
	padding-left: 10px;
}

.buttonConteiner {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 11%;
	margin-right: 1%;
}
.lang {
	font-size: 14px;
}
.btnWrapper {
	height: 50%;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid rgba(128, 128, 128, 0.582);
	border-radius: 4px;
	transition: 400ms;
}
.btnWrapper:nth-child(2) {
	margin-right: 10px;
	margin-left: 10px;
}
.btnWrapper:hover {
	background-color: #282d3b;
}
.btnWrapper button {
	height: 100%;
	width: 100%;
	padding: 10px;
	background: transparent;
	border: unset;
	display: flex;
	justify-content: center;
	align-items: center;
}
.headerItem p {
	font-size: 25px;
}

@media screen and (max-height: 800px) {
	.title p {
		font-size: 20px;
	}
}
</style>
