<script lang="ts">
import { filterStore } from '$src/stores/filterStore';

let showSportsModal = false;

const mainSports = ['Футбол', 'Хоккей', 'Теннис', 'Баскетбол', 'Волейбол', 'Бейсбол'];

const allSports = [
	...mainSports,
	'Американский футбол',
	'Бадминтон',
	'Бокс',
	'Гандбол',
	'Дартс',
	'Киберспорт',
	'Крикет',
	'MMA',
	'Настольный теннис',
	'Регби',
	'Снукер',
	'Формула 1'
];

let searchQuery = '';
let previousSelections: string[] = [];

function savePreviousSelections() {
	previousSelections = [...$filterStore.selectedSports];
}

function restoreSelections() {
	filterStore.setSelectedSports(previousSelections);
	showSportsModal = false;
}

$: filteredSports = searchQuery ? allSports.filter((sport) => sport.toLowerCase().includes(searchQuery.toLowerCase())) : allSports;
</script>

<section class="sports-section">
	<h2 class="section-title">Спорт</h2>
	<div class="sports-grid">
		{#each mainSports as sport}
			<button
				class="sport-button"
				class:active={$filterStore.selectedSports.includes(sport)}
				on:click={() => filterStore.toggleSport(sport)}>
				{sport}
			</button>
		{/each}
		<button
			class="sport-button show-all"
			on:click={() => {
				savePreviousSelections();
				showSportsModal = true;
			}}>
			Показать все ({allSports.length})
		</button>
	</div>
</section>

{#if showSportsModal}
	<div class="modal-overlay">
		<div class="modal">
			<div class="modal-header">
				<h3>Виды спорта</h3>
				<button
					class="close-button"
					on:click={() => (showSportsModal = false)}>✕</button>
			</div>

			<div class="search-container">
				<input
					type="text"
					placeholder="Поиск..."
					bind:value={searchQuery}
					class="search-input" />
			</div>

			<div class="sports-list">
				{#each filteredSports as sport}
					<label class="sport-item">
						<input
							type="checkbox"
							checked={$filterStore.selectedSports.includes(sport)}
							on:change={() => filterStore.toggleSport(sport)} />
						<span class="sport-name">{sport}</span>
					</label>
				{/each}
			</div>

			<div class="modal-footer">
				<button
					class="cancel-button"
					on:click={restoreSelections}>
					Отмена
				</button>
				<button
					class="apply-button"
					on:click={() => (showSportsModal = false)}>
					Применить ({$filterStore.selectedSports.length})
				</button>
			</div>
		</div>
	</div>
{/if}

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
	background: #0d111d;
}

.show-all:hover {
	background: rgba(255, 255, 255, 0.05);
}

.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.modal {
	background: #20242f;
	border-radius: 16px;
	width: 90%;
	max-width: 500px;
	max-height: 90vh;
	display: flex;
	flex-direction: column;
}

.modal-header {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #363a45;
}

.modal-header h3 {
	font-size: 20px;
	color: white;
	font-weight: 600;
}

.close-button {
	background: none;
	border: none;
	color: white;
	font-size: 20px;
	cursor: pointer;
	padding: 4px;
}

.search-container {
	padding: 16px;
	border-bottom: 1px solid #363a45;
}

.search-input {
	width: 100%;
	padding: 12px;
	background: #363a45;
	border: none;
	border-radius: 8px;
	color: white;
	font-size: 16px;
}

.search-input::placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.sports-list {
	padding: 16px;
	overflow-y: auto;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.sport-item {
	display: flex;
	align-items: center;
	gap: 12px;
	cursor: pointer;
	padding: 8px;
	border-radius: 8px;
}

.sport-item:hover {
	background: #363a45;
}

.sport-name {
	color: white;
	font-size: 16px;
}

.modal-footer {
	padding: 16px;
	display: flex;
	justify-content: flex-end;
	gap: 12px;
	border-top: 1px solid #363a45;
}

.cancel-button,
.apply-button {
	padding: 12px 24px;
	border-radius: 8px;
	font-size: 14px;
	cursor: pointer;
	transition: all 0.2s ease;
}

.cancel-button {
	background: transparent;
	border: 1px solid #4a5568;
	color: white;
}

.cancel-button:hover {
	background: rgba(74, 85, 104, 0.2);
}

.apply-button {
	background: #6366f1;
	border: none;
	color: white;
}

.apply-button:hover {
	background: #4f46e5;
}
</style>
