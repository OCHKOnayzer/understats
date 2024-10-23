<script>
	import Header from '../../components/header.svelte';
	import Menu from '../../components/section/menu.svelte';
	import UserAvatar from '../../components/widgets/userAvatar.svelte';
	import Info from '../../components/section/info.svelte';
	import EditPass from '../../components/section/editPass.svelte';

	import { t } from 'svelte-i18n';
	const headerProps = $t('settings.settings');
	import Setings from '../../components/widgets/setings.svelte';
</script>

<svelte:head>
	<title>{headerProps}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<Menu />
	<div class="mainContent">
		<Header {headerProps} />
		<div class="progressWrapper">
			<Setings />
		</div>
		<UserAvatar />
		<Info />
		<EditPass />
	</div>
</div>

<style>
	.progressWrapper {
		width: 98%;
		margin: 0 auto;
		padding-bottom: 10px;
		box-sizing: border-box;
	}
</style>
