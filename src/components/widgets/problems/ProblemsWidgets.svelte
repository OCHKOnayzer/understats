<script>
import { t } from 'svelte-i18n';

import { openModal } from '$src/stores/modalStore';
</script>

<div class="problems_wrapper">
	<div class="problem_container">
		<div class="problem_title">
			<img
				src="assets/extension/global.svg"
				alt="" />
			<span class="title"> {$t('extensions.need_help')}</span>
		</div>
		<div class="supp-span">
			<span>{$t('extensions.problems_install')}</span>
			<span>{$t('extensions.chat_install')}</span>
		</div>
		<div class="problem_content">
			<button
				class="open_modal_btn"
				on:click="{() => openModal('SocialModal')}">
				<div class="chat_block">
					<img
						src="assets/menu/menuElements/chat.png"
						alt="" />
				</div>
				{$t('other.open_contacts')}
			</button>
		</div>
	</div>
</div>

<style>
.problems_wrapper {
	width: 100%;
	background-color: #252935;
	border-radius: 0px 0px 5px 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 30%;
	height: fit-content;
}
.problem_container {
	width: 95%;
}
.problem_title {
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	font-size: 24px;
}
.title {
	margin-left: 10px;
}
.supp-span {
	display: flex;
	flex-direction: column;
	font-size: 14px;
	color: #718096;
	margin-top: 10px;
	margin-bottom: 10px;
}
.problem_content {
	color: #718096;
	font-size: 16px;
}
.open_modal_btn {
	background-color: #171b26;
	border: 1px solid #363a45;
	box-sizing: border-box;
	border-radius: 5px;
	height: 40px;
	color: white;
	font-size: 16px;
	padding-left: 5px;
	padding-right: 5px;
	margin-top: 5px;
	display: flex;
	align-items: center;
}
.chat_block {
	border: 1px solid #363a45;
	box-sizing: border-box;
	height: 30px;
	width: 30px;
	border-radius: 5px;
	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.chat_block img {
	height: 60%;
	width: 60%;
}
@media (max-height: 770px) {
	.problems_wrapper {
		display: none;
	}
}
@media (max-width: 800px) {
	.problems_wrapper {
		display: none;
	}
}
</style>
