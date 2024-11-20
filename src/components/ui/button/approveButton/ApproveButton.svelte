<script lang="ts">
interface ApproveInterface {
	isChecked: boolean;
}
import { t } from 'svelte-i18n';
let { isChecked = false } = $$props as ApproveInterface;
function toggleCheck() {
	isChecked = !isChecked;
}
</script>

<div class="social_document">
	<button
		class="approve"
		on:click="{toggleCheck}"
		aria-pressed="{isChecked}"
		aria-label="Accept terms">
		{#if isChecked}
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="checkmark">
				<path
					d="M5 12L10 17L20 7"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<animate
						attributeName="stroke-dasharray"
						from="0, 22"
						to="22, 0"
						dur="0.4s"
						fill="freeze"
						begin="0.1s"></animate>
					<animate
						attributeName="opacity"
						from="0"
						to="1"
						dur="0.4s"
						fill="freeze"
						begin="0.1s"></animate>
				</path>
			</svg>
		{/if}
	</button>
	<span>
		{$t('social.accept')}
		<a
			class="socail_href"
			href="/">{$t('social.user_submit')}</a>
	</span>
</div>

<style>
.social_document {
	font-size: 12px;
	display: flex;
	align-items: center;
	padding-top: 20px;
}

.approve {
	border: 2px solid #6660ff;
	background-color: #6660ff80;
	height: 24px;
	width: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-weight: bold;
	color: white;
	font-size: 16px;
	border-radius: 4px;
	margin-right: 10px;
}

.checkmark {
	transform: scale(0.8);
	opacity: 0;
	transition: transform 0.3s ease, opacity 0.3s ease;
}

.approve:has(svg) .checkmark {
	transform: scale(1);
	opacity: 1;
}
.socail_href {
	color: #6660ff;
}
</style>
