<script>
import { t } from 'svelte-i18n';

import ExtensionsBtn from '../../button/extensionsBtn/extensionsBtn.svelte';
import AccountsButton from '../../button/accountsButtons/AccountsButton.svelte';
</script>

<div class="extWidgt">
	<div class="extWidgt_Wrapper">
		<header>
			<div class="ext_menu">
				<div class="element_menu_conteiner">
					<img
						src="assets/extensionsAssets/menu.svg"
						alt="" />
				</div>
			</div>
			<div class="ext_logo">
				<div class="logo">
					<div class="imgLogo">
						<img
							src="assets/menu/logo.png"
							alt="" />
					</div>
					UnderStat
				</div>
			</div>
			<div class="puls">
				<div class="element_menu_conteiner">
					<img
						src="assets/extensionsAssets/plus.svg"
						alt="" />
				</div>
			</div>
		</header>
		<div class="widgets_info">
			<div class="widgets_info_wrapper">
				<span>{$t('extensions.Automated_bidding')}</span>
				<span>{$t('extensions.Automation_analytics')}</span>
				<span>{$t('extensions.Your_bets')}</span>
				<span>{$t('extensions.service_does')}</span>
			</div>
		</div>
		<ExtensionsBtn />
		<div class="accounts_wrapper">
			<AccountsButton />
		</div>
	</div>
</div>

<style>
.extWidgt {
	position: relative;
	width: 26%;
	height: 50vh;
	top: -38vh;
	left: 3vh;
	bottom: 100vh;
	background-color: #0d111d;
	border-radius: 5px;
	border: 1px solid #363a45;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	z-index: 2;
}

.extWidgt_Wrapper {
	height: 98%;
	width: 98%;
	box-sizing: border-box;
}

.extWidgt_Wrapper header {
	width: 100%;
	height: 10%;
	display: flex;
	justify-content: space-between;
	padding-bottom: 20px;
}

.ext_logo {
	width: 60%;
}

.logo {
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
}

.imgLogo {
	height: 100%;
	margin-right: 3px;
}

.imgLogo img {
	height: 100%;
	width: 100%;
}

.ext_menu,
.puls {
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.element_menu_conteiner {
	width: 65%;
	height: 75%;
	border: 1px solid #363a45;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.widgets_info {
	min-height: 10vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
}
.widgets_info_wrapper {
	display: flex;
	flex-direction: column;
}
.widgets_info_wrapper span:nth-child(1) {
	font-weight: 500;
	font-size: 16px;
	line-height: 32px;
}

.widgets_info_wrapper span:nth-child(2),
.widgets_info_wrapper span:nth-child(3) {
	font-weight: 200;
	color: rgba(255, 255, 255, 0.689);
	font-size: 14px;
	line-height: 20px;
}

.widgets_info_wrapper span:nth-child(4) {
	font-weight: 300;
	font-size: 12px;
	line-height: 20px;
	color: rgba(255, 255, 255, 0.285);
}

.accounts_wrapper {
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

/* Адаптивность */
/* @media (max-width: 1200px) {
        .extWidgt {
            width: 20vw;
            height: 50vh;
        }

        .widgets_info_wrapper span:nth-child(1) {
            font-size: 14px;
        }

        .widgets_info_wrapper span:nth-child(2), .widgets_info_wrapper span:nth-child(3) {
            font-size: 12px;
        }

        .widgets_info_wrapper span:nth-child(4) {
            font-size: 10px;
        }
    }

    @media (max-width: 768px) {
        .extWidgt {
            width: 90vw;
            height: 60vh;
            top: -30vh;
            left: 5vw;
        }

        .widgets_info_wrapper span:nth-child(1) {
            font-size: 12px;
        }

        .widgets_info_wrapper span:nth-child(2), .widgets_info_wrapper span:nth-child(3) {
            font-size: 10px;
        }

        .widgets_info_wrapper span:nth-child(4) {
            font-size: 8px;
        }
    }

    @media (max-width: 480px) {
        .extWidgt {
            width: 95vw;
            height: 55vh;
            top: -25vh;
            left: 2.5vw;
        }

        .widgets_info_wrapper span:nth-child(1) {
            font-size: 10px;
        }

        .widgets_info_wrapper span:nth-child(2), .widgets_info_wrapper span:nth-child(3) {
            font-size: 8px;
        }

        .widgets_info_wrapper span:nth-child(4) {
            font-size: 6px;
        }
    } */
</style>
