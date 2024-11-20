<script>
import { t } from 'svelte-i18n';

import ProblemsWidgets from '$src/components/widgets/problems/ProblemsWidgets.svelte';

import { extItems } from './extItems';
</script>

<div class="quess_wrapper">
	<div class="ques_container">
		<div class="ques_title">
			{$t('extensions.how_to_work')}
		</div>
		<div class="questions">
			{#each extItems as items}
				<div class="ext_card">
					<div class="card_title">
						<img
							src="{items.image}"
							alt="" />
						{$t(items.name)}
					</div>
					<div class="card_description">
						{$t(items.description)}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<ProblemsWidgets />
</div>

<style>
.quess_wrapper {
	width: 40%;
	background-color: #171b26;
	border-radius: 5px 5px 0px 0px;
	min-height: 40vh;
	height: fit-content;
}
.ques_title {
	margin-top: 4vh;
	width: 100%;
	font-weight: 500;
	font-size: 24px;
}
.ques_container {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 94%;
	height: 100%;
	margin: 0 auto;
}
.questions {
	margin-top: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.ext_card {
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;
}
.card_title {
	display: flex;
	font-size: 16px;
}
.card_title img {
	margin-right: 10px;
}
.card_description {
	margin-top: 10px;
	color: #718096;
	font-size: 14px;
}
</style>
