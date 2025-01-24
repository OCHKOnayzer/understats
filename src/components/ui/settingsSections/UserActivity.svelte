<script>
import { t } from 'svelte-i18n';

import { ActivityArray } from './activity';
</script>

<div class="activityWrapper">
	<div class="tariffsContainer"> </div>
	{#each ActivityArray as item}
		<div class="activityContainer">
			<div class="containerItems">
				<span>
					{$t(item.option)}
				</span>
				<span>
					{$t(item.name)}
				</span>
			</div>
		</div>
	{/each}
</div>

<style>
.activityWrapper {
	color: white;
	width: 100%;
	height: 160px;
	display: flex;
	margin-bottom: 24px;
}
.tariffsContainer {
	width: 392px;
	height: 100%;
	background-color: #171b26;
	border-radius: 5px;
	width: 60%;
}
.activityContainer {
	height: 100%;
	width: 40%;
	background-color: #171b26;
	margin-left: var(--elements-padding);
	border-radius: 5px;
}
.containerItems {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	margin-left: 24px;
}
.containerItems span:nth-child(1) {
	font-weight: 700;
	font-size: 34px;
}
.containerItems span:nth-child(2) {
	font-size: 14px;
	font-weight: 400;
	color: #9d9d9d;
}
@media screen and (max-width: 800px) {
	.activityWrapper {
		overflow-x: scroll;
	}
	.activityContainer {
		width: 250px;
	}
}
</style>
