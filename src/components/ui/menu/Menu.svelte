<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchUser, user } from '$stores/menu'
	import { t } from 'svelte-i18n';
	import logo from '../../../../static/assets/logo.png';
	import quit from '../../../../static/assets/leave.svg';
	import avatar from '../../../../static/assets/avatar.jpg';
	import img from '../../../../static/assets/img.png';
	import img1gold from '../../../../static/assets/img1gold.png';
	import img3gold from '../../../../static/assets/img3gold.png';
	import RouteMenu from './routeMenu.svelte';
	import RouteHelp from './routeHelp.svelte';

	onMount(() => {
		fetchUser();
	});

	let currentPath: string = '';

	onMount(() => {
		currentPath = window.location.pathname;
	});

	$: isActive = (href: string): boolean => currentPath === href;
</script>

<div class="menu">
	<div class="menuWrapper">
		<div class="menu_flex_up">
			<div class="logo">
				<div class="imgLogo">
					<img src={'/assets/logo.png'} alt=""/> 
				</div>
				UnderStat
			</div>

			<div class="userAwards">
				<div class="userAwardsConteiner" class:usAwardDs={isActive('/awards')}>
					<span>{$t('other.awards')}</span>
					<div class="user_award">
						<div>
							<img src={img} alt="" />
							<p>4</p>
						</div>
						<div>
							<img src={img1gold} alt="" />
							<p>0</p>
						</div>
						<div>
							<img src={img3gold} alt="" />
							<p>0</p>
						</div>
					</div>
				</div>
			</div>
			<RouteMenu />
		</div>
		<div class="menu_flex_dwn">
			<RouteHelp />
			{#if $user}
				<div class="userConteiner">
					<div class="user_flex">
						<div class="avatar">
							<img class="image" src={$user.image || avatar} alt="user avatar" />
						</div>
						<div class="user_info">
							<div class="user_wrapper">
								<div class="userName">{$user.name}</div>
								<span>ID: {$user.id}</span>
							</div>
							<div class="quitBtn">
								<img src={quit} alt="" />
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.menu {
		position: fixed;
		width: 13vw;
		height: 100vh;
		background-color: #171b26;
		color: white;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
    z-index: 3;
	}
	.menuWrapper {
		height: 95%;
		width: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.logo {
		display: flex;
		align-items: center;
		font-size: 20px;
	}
	.imgLogo {
		max-height: 60px;
		max-width: 60px;
	}
	.imgLogo img {
		height: 100%;
		width: 100%;
	}
	.userAwards {
		margin: 20px 0px 20px 0px;
	}
	.userAwardsConteiner {
		background-color: #0d111d;
		height: 40px;
		border-radius: 5px;
		display: flex;
		align-items: center;
		color: #9a9bbc;
		font-size: 15px;
	}
	.usAwardDs {
		background-color: #2a2b5b;
		border: 2px solid #424482;
	}
	.user_award {
		margin-left: 10px;
		height: 90%;
		display: flex;
		align-items: center;
		width: fit-content;
	}
	.user_award div {
		margin-right: 20px;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
	}
	.user_award div img {
		height: 100%;
		width: 100%;
	}
	.userAwardsConteiner span {
		padding-left: 10px;
	}
	.userConteiner {
		height: fit-content;
		padding: 5px;
		width: 95%;
		margin: 0 auto;
		background-color: #0d111d;
		border-radius: 5px;
	}
	.user_flex {
		display: flex;
	}
	.avatar {
		border-radius: 50%;
		height: 30px;
		width: 30px;
		overflow: hidden;
		margin: 5px;
	}
	.image {
		height: 100%;
		width: 100%;
	}
	.user_info {
		width: 80%;
		margin-left: 10px;
		display: flex;
		justify-content: space-between;
	}
	.userName {
		font-size: 15px;
	}
	.user_info span {
		color: rgba(128, 128, 128, 0.383);
	}
	.quitBtn {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 1600px) {
		.menu {
			width: 20vw;
		}
		.menuWrapper {
			width: 85%;
		}
	}

	@media screen and (max-width: 1100px) {
		.menu {
			width: 30vw;
		}
		.menuWrapper {
			width: 85%;
		}
	}
</style>
