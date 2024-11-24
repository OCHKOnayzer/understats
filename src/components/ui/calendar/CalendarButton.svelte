<script lang="ts">
    interface Props {
        selectedDateRange: string;
        showCalendar: boolean;
        onToggle: () => void;
    }

    let { selectedDateRange, showCalendar, onToggle }: Props = $props() ;
</script>

<button
    class="period-button"
    class:active={showCalendar}
    on:click={onToggle}
>
    <span>{selectedDateRange}</span>
    <span class="arrow" class:active={showCalendar}>▼</span>
</button>

<style>
    .period-button {
        width: 100%;
        padding: 12px;
        background: #363a45;
        border: 1px solid transparent;
        border-radius: 8px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: all 0.2s ease-out;
    }

    .period-button:hover {
        background: #4a4f5c;
    }

    .period-button.active {
        background: #4a4f5c;
        border-color: #6366f1;
    }

    .arrow {
        font-size: 12px;
        transition: transform 0.2s;
        transform: rotate(0);
    }

    .arrow.active {
        transform: rotate(180deg);
    }
</style>
