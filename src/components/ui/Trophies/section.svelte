<svelte:options runes="{false}" />

<script lang="ts">
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';

import UTrophies from './uTrophies.svelte';
import LockTrophies from './lockTrophies.svelte';
import { awards, allAwards } from './card.ts';

let receivedTitle = get(t)('awards.received');
let futureTitle = get(t)('awards.future');
let remaining = get(t)('awards.remaining');

$: receivedTitle = get(t)('awards.received');
$: futureTitle = get(t)('awards.future');
$: remaining = get(t)('awards.remaining');
</script>

<section class="mainSection">
	<div class="tropheys">
		<span class="trTtitle">
			{receivedTitle}
			<span class="count">({awards.length === 0 ? '0%' : awards.length})</span>
		</span>
		<UTrophies awards="{awards}" />

		<span class="trTtitle">
			{futureTitle}
			<span class="more">
				({remaining}&nbsp;{allAwards.length})
			</span>
		</span>
		<LockTrophies awards="{allAwards}" />
	</div>
</section>

<style>
.mainSection {
	box-sizing: border-box;
	height: 100%;
	width: 98%;
	margin: 0 auto;
}
.mainSection div {
	width: 100%;
}
.tropheys span {
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	font-size: 20px;
	margin: 10px;
}
.trTtitle {
	color: white;
	padding-bottom: 5px;
	display: block;
}
.count {
	color: gold;
}
.more {
	color: #71747d;
}
/* @media(max-width: 1650px){
		.mainSection{
			padding-left: 20px;
			box-sizing: border-box;
			height: 100%;
			overflow-y: auto;
			width: 99%;
		}
	} */
</style>
