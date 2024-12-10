<script>
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { currentUser } from '$src/stores/modalStore';
import { user, fetchUser } from '$stores/menu';

onMount(() => {
	fetchUser();
});

// const maxLevel = 50;
</script>

<div class="progressWrapper">
	<div class="progressTitle">
		<div class="main_info_wrapper">
			<p class="widget_title">
				{$t('settings.basic_info')}
			</p>
		</div>
	</div>
	<div class="setings">
		<!-- <div class="setings_item item-w">
			<div class="item_settings_info">
				<p class="settings_name">{$t('settings.create_data')}</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					{#if $user}
						<span class="user_date">{$user.date}</span>
					{/if}
				</div>
			</div>
		</div> -->
		<!-- <div class="setings_item item-w">
			<div class="item_settings_info">
				<p class="settings_name">{$t('settings.profile_awards')}</p>
			</div>
			<div class="selected_element item-w">
				<div class="selected_menu_element user_lvl">
					{#if $user}
						<span class="user_date">{$user.awards}</span>
					{/if}/ <span class="maxlevel">{maxLevel}</span>
				</div>
			</div>
		</div> -->
		<!-- <div class="setings_item item-w">
			<div class="item_settings_info">
				<p class="settings_name">{$t('settings.acc_lvl')}</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					{#if $user}
						<span class="user_level">{$user.level} {$t('other.level')}</span>
					{/if}
				</div>
			</div>
		</div> -->
	</div>
	<div class="basic_setings">
		<div class="other_user_settings">
			<div class="accounts">
				<div><p class="accounts--text">{$t('settings.create_data')}</p></div>
				<div class="other_account_wrapper">
					<div class="accounts_element">
						{#if $currentUser}
							<span> {$t('other.acc')}</span>
						{/if}
					</div>
				</div>
			</div>
			<div class="accounts">
				<div><p class="accounts--text">{$t('settings.create_email')}</p></div>
				<div class="other_account_wrapper">
					<div class="accounts_element">
						{#if $currentUser}
							<span>{$currentUser.login}</span>
						{/if}
					</div>
				</div>
			</div>
			<!-- <div class="btn_edit__wrapper">
          <button class="btn_edit">
            <span>
              <img src="assets/edit.svg" alt="" />
            </span>
          </button>
          <button class="leave_acc">
            <p class="leave_acc_p">{$t('settings.leave')}</p>
          </button>
        </div> -->
		</div>
	</div>
</div>

<style>
/* .settings_name {
	margin-top: 10px;
	margin-bottom: 10px;
} */
.widget_title {
	margin-top: 20px;
	margin-bottom: 20px;
}
.accounts--text {
	/* margin-top: 20px; */
	margin-bottom: 20px;
}
.progressWrapper {
	width: 100%;
	margin: 0 auto;
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
	/* justify-content: center; */
	align-items: center;
	height: fit-content;
	width: 100%;
	position: relative;
	/* padding-bottom: 10px; */
}
.basic_setings {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 10px;
	margin-top: 10px;
}
.other_user_settings {
	display: flex;
	justify-content: left;
	width: 100%;
}
/* .btn_edit__wrapper {
	display: flex;
	align-items: end;
} */
.accounts {
	width: 22vw;
	height: fit-content;
	margin-right: 10px;
}
/* .setings_item {
	height: 12vh;
	border-radius: 10px;
}
.item-w {
	width: 33%;
}
.setings_item:nth-child(1),
.setings_item:nth-child(2) {
	margin-right: 15px;
} */

/* .setings_item:last-child {
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
} */
.other_account_wrapper {
	background-color: #20242f;
	border-radius: 10px;
	height: 7vh;
	display: flex;
	align-items: center;
	padding-left: 10px;
}
/* .selected_menu_element {
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
} */
/* .user_lvl {
	font-size: 20px;
}
.user_lvl span:nth-child(1) {
	color: #f3c055;
} */
/* .btn_edit {
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
.leave_acc_p {
	font-size: 20px;
	color: #737e91;
}
.user_date {
	color: #737e91;
}
.user_level {
	font-size: 20px;
	color: #f3c055;
} */
@media (max-width: 1200px) {
	.main_info_wrapper .widget_title {
		margin: 10px 0px 0px 0px;
	}
}
@media (max-width: 1000px) {
	/* .selected_menu_element,
	.user_level,
	.leave_acc_p, */
	.other_account_wrapper {
		font-size: 15px;
	}
}
@media (max-width: 768px) {
	.progressWrapper {
		padding: 0 15px;
	}
	/* .leave_acc_p {
		font-size: 10px;
	} */
	.progressTitle {
		flex-direction: column;
		align-items: flex-start;
	}
}
@media (max-height: 800px) {
	.basic_setings,
	.setings {
		padding-bottom: 2%;
	}
}
@media (max-height: 700px) {
	.accounts--text {
		margin-top: 20px;
		font-size: 15px;
	}
	.other_user_settings {
		margin-top: 10px;
	}
	/* .btn_edit,
	.leave_acc, */
	.other_account_wrapper {
		height: 9vh;
	}
	/* .selected_element {
		height: 70%;
	} */
}
@media (max-width: 678px) {
	.progressWrapper {
		border-radius: 24px;
		padding-bottom: 2vh;
		padding-right: 0;
		padding-left: 0;
	}
	.progressTitle {
		padding-left: 15px;
	}
	.setings {
		padding: 0;
	}
	.basic_setings {
		padding: 0;
		margin-top: 0;
	}
	.other_user_settings {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0;
	}
	.accounts {
		width: 90%;
		margin: 0;
	}
	.accounts--text {
		margin-top: 10px;
		margin-bottom: 10px;
	}
}
</style>
