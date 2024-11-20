<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let {title, isInitiallyOpen = false, children} = $props();

  function toggleAccordion() {
		isInitiallyOpen = !isInitiallyOpen;
  }
</script>

<div class="accordion">
  <div class="accordion-header" on:click={toggleAccordion}>
    <h2 class="accordion-title">{title}</h2>
    <button class="accordion-toggle">
      {isInitiallyOpen ? '−' : '+'}
    </button>
  </div>

  {#if isInitiallyOpen}
    <div 
      class="accordion-content" 
      transition:slide={{
        duration: 400, 
        easing: backOut
      }}
    >
			{@render children?.()}
    </div>
  {/if}
</div>

<style>
  .accordion {
    background-color: #20242f;
    border-radius: 12px;
    margin: 16px 0;
    color: white;
    overflow: hidden;
  }

  .accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .accordion-header:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .accordion-title {
    font-size: 20px;
    font-weight: 600;
  }

  .accordion-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .accordion-toggle:hover {
    transform: scale(1.1);
  }

  .accordion-content {
    padding: 16px;
  }
</style>