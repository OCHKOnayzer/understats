<script lang="ts">
  import { onMount } from 'svelte';

  let target: HTMLElement;
  
  onMount(() => {
    target = document.createElement('div');
    target.className = 'portal-container';
    document.body.appendChild(target);
    
    return () => {
      document.body.removeChild(target);
    };
  });
</script>

{#if target}
  <div bind:this={target}>
    <slot />
  </div>
{/if}

<style>
  .portal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    pointer-events: none;
  }
  
  .portal-container :global(*) {
    pointer-events: auto;
  }
</style>