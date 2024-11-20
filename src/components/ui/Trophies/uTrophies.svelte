<script lang="ts">
import { t } from 'svelte-i18n';

interface Award {
	name: string;
	des: string;
	rare: string;
	image: string;
	color: string;
	get: boolean;
}

const { awards } = $$props as { awards: Award[] };
</script>

<div class="main">
	{#if awards && awards.length > 0}
		{#each awards as award}
			<div class="card">
				<div class="article">
					<div class="img">
						<img
							src="{award.image}"
							alt="congratulation" />
					</div>
					<div class="text-article">
						<p
							title="{$t(award.name)}"
							style="color: {award.get ? '#babdc6' : '#565f6e'}">
							{$t(award.name)}
						</p>
						<p
							title="{$t(award.rare)}"
							style="color: {award.color}">{$t(award.rare)}</p>
					</div>
				</div>
				<div class="wrap_text">
					<p class="pale">{$t('awards.condition')}</p>
					<p class="dop_text">{$t(award.des)}</p>
				</div>
			</div>
		{/each}
	{:else}
		<p class="awardsNull">Наград не получено</p>
	{/if}
</div>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

p {
	color: #babdc6;
}
.awardsNull {
	margin-left: 10px;
	font-size: 20px;
	color: #738097;
}
.pale {
	color: #565f6e;
	margin: 2% 0 2% 0;
}

.dop_text {
	color: #71747d;
}

.main {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
	width: 100%;
}

.card {
	transition: 600ms;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 10px;
	border-radius: 8px;
	background: #171b26;
	min-height: 140px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.card:hover {
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
.img img {
	max-width: 100%;
	max-height: 40px;
	margin: 5px;
}

.article {
	display: flex;
	padding: 0.4%;
}

.text-article {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.wrap_text {
	width: 98%;
}
.text-article p {
	overflow: hidden;
	text-overflow: ellipsis;
	margin: 0;
}

@media (max-width: 1300px) {
	.main {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (max-width: 600px) {
	.main {
		grid-template-columns: 1fr;
	}
}
</style>
