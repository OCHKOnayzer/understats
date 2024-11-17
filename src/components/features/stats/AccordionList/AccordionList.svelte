<script lang="ts">
  export let title: string;
  export let isOpen = false;
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';
</script>

<div class="accordion">
  <button 
    class="accordion-header" 
    class:active={isOpen}
    on:click={() => isOpen = !isOpen}
    aria-expanded={isOpen}
  >
    <span class="title">{title}</span>
    <span class="icon" class:open={isOpen}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </button>
  
  {#if isOpen}
    <div 
      class="accordion-content"
      transition:slide={{duration: 400, easing: quintOut}}
    >
      <div class="content-wrapper">
        <slot />
      </div>
    </div>
  {/if}
</div>

<style>
  .accordion {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;
    background: #0d111d;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .accordion:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.15), 
                0 3px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .accordion-header {
    width: 100%;
    padding: 20px 24px;
    background: transparent;
    border: none;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .accordion-header::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(99, 102, 241, 0) 0%, rgba(99, 102, 241, 0.1) 100%);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .accordion-header:hover::before {
    transform: translateX(0);
  }

  .accordion-header.active {
    background: #151923;
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.95);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .icon.open {
    background: rgba(99, 102, 241, 0.2);
    transform: rotate(180deg);
  }

  .accordion-content {
    background: #151923;
    overflow: hidden;
  }

  .content-wrapper {
    padding: 0 24px 24px 24px;
  }

  .accordion:has(.accordion-header.active) {
    background: #151923;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 
                0 2px 4px -1px rgba(0, 0, 0, 0.1);
  }

  @media (hover: hover) {
    .accordion-header:hover .icon {
      background: rgba(99, 102, 241, 0.15);
    }
  }
</style>