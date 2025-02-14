<script lang="ts">
import { t } from 'svelte-i18n';
import Icon from '@iconify/svelte';
import { slide } from 'svelte/transition';
let isInitiallyOpen = false
let {title} = $$props
function openState(){
    isInitiallyOpen = !isInitiallyOpen
}
</script>
<div class="arcadion_wrapper"
role="button"
tabindex="0"
on:click="{()=> openState()}">
    <div class="arcadion_header">
        <span class="title">{$t(title)}</span>
        <button
        class="accordion-toggle"
        class:active="{isInitiallyOpen}">
        <Icon icon="solar:alt-arrow-up-linear" />
    </button>
    </div>
    {#if isInitiallyOpen}
    <div class="content"
    transition:slide="{{
        duration: 400
    }}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam suscipit explicabo libero fuga incidunt modi eligendi soluta, ullam alias totam facilis consequuntur ut. Cupiditate aut labore laborum maiores necessitatibus.
    </div>
    {/if}
</div>
<style>
.arcadion_wrapper{ 
    width: 100%;
    border: 1px solid #363A45;
    border-radius: 16px;
    height: auto;
    padding: 20px var(--elements-padding);
    margin-bottom: var(--elements-padding);
    margin-top: 1.25rem;
}
.arcadion_header{ 
    display: flex;
    justify-content: space-between;
}
.title{ 
    color: white;
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
	transform: rotate(180deg);
	transition: transform 0.2s ease;
}
.accordion-toggle.active {
	transform: rotate(0deg);
	transition: transform 0.3s ease;
}
.content{ 
    color: #718096;
    padding-top: var(--elements-padding);
}

</style>