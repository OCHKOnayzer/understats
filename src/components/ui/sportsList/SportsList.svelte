<script lang="ts">
import { filterStore } from '$src/stores/filterStore';

let showAllSports = false;

const sports = ['Футбол', 'Хоккей', 'Теннис', 'Футбол', 'Хоккей', 'Теннис', 'Футбол', 'Хоккей'];

$: visibleSports = showAllSports ? sports : sports.slice(0, 6);
</script>

<section class="sports-section">
	<h2 class="section-title">Спорт</h2>
	<div class="sports-grid">
		{#each visibleSports as sport}
			<button
				class="sport-button"
				class:active={$filterStore.selectedSports.includes(sport)}
				on:click={() => filterStore.toggleSport(sport)}>
				{sport}
			</button>
		{/each}
		{#if !showAllSports}
			<button
				class="sport-button show-all"
				on:click={() => (showAllSports = true)}>
				Показать все (12)
			</button>
		{/if}
	</div>
</section>

<style>
.sports-section {
	margin: 32px 0;
}

.section-title {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 16px;
	color: white;
}

.sports-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 8px;
}

.sport-button {
	padding: 12px;
	background: #0d111d;
	border: none;
	border-radius: 12px;
	color: white;
	cursor: pointer;
	font-size: 16px;
	transition: all 0.2s ease-in-out;
}

.sport-button:hover {
	background: #3a3a3c;
}

.sport-button.active {
	background: #6366f1;
}

.show-all {
	background: transparent;
	background: #0d111d;
}

.show-all:hover {
	background: rgba(255, 255, 255, 0.05);
}
</style>
