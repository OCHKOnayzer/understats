<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

let currentPath = '';

onMount(() => {
	currentPath = window.location.pathname;
});

$: isActive = (href: string): boolean => currentPath === href;
</script>

<div class="userAwards">
	<div
		class="userAwardsConteiner usAwardDs"
		class:usAwardDs={isActive('/awards')}>
		<span>{$t('other.awards')}</span>
		<div class="user_award">
			<div>
				<img
					src="/assets/awards/gold/goldTrophLvl1.png"
					alt="Трофей" />
				<p>4</p>
			</div>
			<div>
				<img
					src="/assets/awards/gold/goldTrophLvl2.png"
					alt="Трофей" />
				<p>0</p>
			</div>
			<div>
				<img
					src="/assets/awards/gold/goldTrophLvl2.png"
					alt="Трофей" />
				<p>0</p>
			</div>
		</div>
	</div>
</div>

<style>
.userAwards {
	margin: 20px 0px 20px 0px;
	width: 100%;
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
	width: 100%;
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
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
