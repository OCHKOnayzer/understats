<script>
import { t } from 'svelte-i18n';
import { page } from '$app/stores';
let { href, content } = $$props;

let isTariffsPage = [`/${href}`]
</script>


{#if !isTariffsPage.includes($page.url.pathname)}
<div class="to_tariffs">
	<a href="{`/${href}`}">
		{$t(content)}
	</a>
</div>
		
{/if}

<style>
.to_tariffs {
	height: 40px;
	width: fit-content;
	border: 1px solid var(--accent-color);
	border-radius: 5px;
	transition: 0.4s ease-in-out;
}
.to_tariffs a {
	padding-left: 10px;
	padding-right: 10px;
	display: flex;
	align-items: center;
	color: white;
	height: 100%;
	width: 100%;
}
@media screen and (max-width: 800px) {
	.to_tariffs {
		margin-top: var(--elements-padding);
		width: 80%;
	}
	.to_tariffs a {
		justify-content: center;
	}
}
.to_tariffs:hover {
	border-color: #4842fa;
}
</style>
