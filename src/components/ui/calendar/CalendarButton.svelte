<script lang="ts">
    export let selectedDateRange: string;
    export let showCalendar: boolean;
    export let onToggle: () => void;
</script>

<button
    class="period-button"
    class:active={showCalendar}
    on:click={onToggle}>
    <span>{selectedDateRange}</span>
    <span
        class="arrow"
        class:open={showCalendar}>▼</span>
</button>

<style>
    .period-button {
        width: 100%;
        padding: 12px;
        background: #363a45;
        border: none;
        border-radius: 8px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .period-button:hover {
        background: #4a4f5c;
    }

    .period-button.active {
        background: #4a4f5c;
    }

    .arrow {
        font-size: 12px;
        transition: transform 0.2s;
    }

    .arrow.open {
        transform: rotate(180deg);
    }
</style>
