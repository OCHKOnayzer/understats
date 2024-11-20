<script lang="ts">
import { t } from 'svelte-i18n';
import { onMount } from 'svelte';

import { afterNavigate } from '$app/navigation';

let currentPath = '';

onMount(() => {
	currentPath = window.location.pathname;
});

afterNavigate(() => {
	currentPath = window.location.pathname;
});
</script>

<div class="userAwards">
	<a
		href="/awards"
		class="userAwardsConteiner usAwardDs"
		class:awardsActive="{currentPath === '/awards'}">
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
					src="/assets/awards/gold/goldTrophLvl3.png"
					alt="Трофей" />
				<p>0</p>
			</div>
		</div>
	</a>
</div>

<style>
.userAwards {
	margin: 10px 0px 10px 0px;
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
.awardsActive {
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
	height: 80%;
	width: 80%;
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
