<script>
import { t } from 'svelte-i18n';
</script>

<div class="problems_wrapper">
	<div class="problem_container">
		<div class="problem_title">
			<img
				src="assets/extension/global.svg"
				alt="" />
			<span class="title"> {$t('extensions.need_help')}</span>
		</div>
		<div class="problem_content">
			<button class="open_modal_btn">
				<div class="chat_block">
					<img
						src="assets/header/nname.png"
						alt="" />
				</div>
				{$t('extensions.support_chat')}
			</button>
		</div>
	</div>
</div>

<style>
.problems_wrapper {
	width: 100%;
	background-color: #252935;
	min-height: 19vh;
	height: fit-content;
	border-radius: 0px 0px 5px 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.problem_container {
	width: 95%;
	height: 80%;
}
.problem_title {
	margin-top: 20px;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	font-size: 24px;
}
.title {
	margin-left: 10px;
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
	height: 50px;
	color: white;
	font-size: 16px;
	padding-left: 5px;
	padding-right: 5px;
	display: flex;
	align-items: center;
}
.chat_block {
	border: 1px solid #363a45;
	box-sizing: border-box;
	height: 40px;
	width: 40px;
	border-radius: 5px;
	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.chat_block img {
	height: 50%;
	width: 50%;
}
</style>
