<script>
	import { t } from 'svelte-i18n';
	import edit from '../../../../../static/assets/edit.svg';
	import { onMount } from 'svelte';
	import { user, fetchUser } from '$stores/menu';

	onMount(() => {
		fetchUser();
	});

	const maxLevel = 50;
</script>

<div class="progressWrapper">
	<div class="progressTitle">
		<div>
			<p>
				{$t('settings.basic_info')}
			</p>
		</div>
	</div>
	<div class="setings">
		<div class="setings_item item-w">
			<div class="item_settings_info">
				<p>{$t('settings.create_data')}</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					{#if $user}
						<span class="user_date">{$user.date}</span>
					{/if}
				</div>
			</div>
		</div>
		<div class="setings_item item-w">
			<div class="item_settings_info">
				<p>{$t('settings.profile_awards')}</p>
			</div>
			<div class="selected_element item-w">
				<div class="selected_menu_element user_lvl">
					{#if $user}
						<span class="user_date">{$user.awards}</span>
					{/if}/ <span class="maxlevel">{maxLevel}</span>
				</div>
			</div>
		</div>
		<div class="setings_item item-w">
			<div class="item_settings_info">
				<p>{$t('settings.acc_lvl')}</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					{#if $user}
						<span class="user_level">{$user.level} {$t('other.level')}</span>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div class="basic_setings">
		<div class="setings_item min--w">
			<div class="item_settings_info">
				<p>{$t('settings.add_acc')}</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					{#if $user}
						<span>{$user.add_account} {$t('other.acc')}</span>
					{/if}
				</div>
			</div>
		</div>
		<button class="btn_edit">
			<span>
				<img src={edit} alt="" />
			</span>
		</button>
		<button class="leave_acc">
			<p>{$t('settings.leave')}</p>
		</button>
	</div>
</div>

<style>
	.progressWrapper {
		margin: 0px 20px 15px 20px;
		height: fit-content;
		box-sizing: border-box;
		margin-top: 10px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		color: white;
		background: #171b26;
		border-radius: 8px;
		padding: 0 20px;
	}
	.progressTitle {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20px;
	}
	.setings {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: fit-content;
		width: 100%;
		position: relative;
		padding-bottom: 10px;
	}
	.basic_setings {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.setings_item {
		height: 12vh;
		border-radius: 10px;
	}
	.item-w {
		width: 33%;
	}
	.min--w {
		width: 22vw;
		padding-bottom: 15px;
	}
	.setings_item:nth-child(1),
	.setings_item:nth-child(2) {
		margin-right: 15px;
	}

	.setings_item:last-child {
		margin-right: 0;
	}
	.selected_element {
		background-color: #20242f;
		width: 100%;
		border-radius: 10px;
		height: 60%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.selected_menu_element {
		padding-right: 10px;
		padding-left: 10px;
	}
	.item_settings_info {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.maxlevel {
		color: #707f9a;
	}
	.user_lvl {
		font-size: 20px;
	}
	.user_lvl span:nth-child(1) {
		color: #f3c055;
	}
	.btn_edit {
		border: 1px solid #6660ff;
		height: 7vh;
		width: 4vw;
		margin-top: 30px;
		border-radius: 10px;
		background: transparent;
	}
	.btn_edit span {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn_edit span img {
		user-select: none;
		height: 50%;
		width: 50%;
	}
	.leave_acc {
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 27vw;
		height: 7vh;
		margin-top: 30px;
		margin-left: 15px;
		border-radius: 10px;
		border: 1px solid #737e91;
		cursor: pointer;
	}
	.leave_acc p {
		font-size: 20px;
		color: #737e91;
	}
	.user_date {
		color: #737e91;
	}
	.user_level {
		font-size: 20px;
		color: #f3c055;
	}
	@media (max-width: 1000px) {
		.selected_element {
			height: 50%;
		}
		.btn_edit,
		.leave_acc {
			margin-top: 20px;
			height: 5vh;
		}
	}
	@media (max-width: 768px) {
		.progressWrapper {
			padding: 0 10px;
		}

		.progressTitle {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
