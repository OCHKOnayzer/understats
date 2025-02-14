<script>
import { t } from 'svelte-i18n';

let { href, content } = $$props;
</script>

<div class="to_tariffs">
	<a href="{`/${href}`}">
		{$t(content)}
	</a>
</div>

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
