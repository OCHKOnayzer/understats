<script>
	import { t } from 'svelte-i18n';
	import arrow from '../../../../../static/assets/arrowSell.svg';
</script>

<div class="progressWrapper">
	<div class="progressTitle">
		<div>
			<p>
				{$t('settings.over_settings')}
			</p>
		</div>
	</div>
	<div class="setings">
		<div class="setings_item">
			<div class="item_settings_info">
				<p>{$t('settings.currency_bets')}</p>
				<p class="clear_curr max--w">{$t('other.clear')}</p>
				<p class="clear_curr min--w">X</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					<span>{$t('other.rub')}</span>
				</div>
				<span class="selected_menu_element">
					<span class="arrowSelcted">
						<img src={arrow} alt="" />
					</span>
				</span>
			</div>
		</div>
		<div class="setings_item">
			<div class="item_settings_info">
				<p>{$t('settings.Interface_language')}</p>
				<p class="clear_curr max--w">{$t('other.clear')}</p>
				<p class="clear_curr min--w">X</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					<span>{$t('other.ru')}</span>
				</div>
				<span class="selected_menu_element">
					<span class="arrowSelcted">
						<img src={arrow} alt="" />
					</span>
				</span>
			</div>
		</div>
		<div class="setings_item">
			<div class="item_settings_info">
				<p>{$t('settings.system_theme')}</p>
				<p class="clear_curr max--w">{$t('other.clear')}</p>
				<p class="clear_curr min--w">X</p>
			</div>
			<div class="selected_element">
				<div class="selected_menu_element">
					<span>{$t('other.bTheme')}</span>
				</div>
				<span class="selected_menu_element">
					<span class="arrowSelcted">
						<img src={arrow} alt="" />
					</span>
				</span>
			</div>
		</div>
	</div>
</div>

<style>
	.progressWrapper {
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
	.setings_item {
		width: 40%;
		height: 12vh;
		border-radius: 10px;
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
	.arrowSelcted {
		cursor: pointer;
		user-select: none;
	}
	.item_settings_info {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.clear_curr {
		color: #6660ff;
	}
	.min--w {
		display: none;
	}
	@media (max-width: 1000px) {
		.selected_element {
			height: 50%;
		}
		.item_settings_info p:nth-child(1) {
			font-size: 15px;
		}
		.min--w {
			display: block;
		}
		.max--w {
			display: none;
		}
	}
	@media (max-width: 768px) {
		.progressWrapper {
			padding: 0 10px;
		}
	}
</style>
