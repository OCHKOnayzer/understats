<script>
import { t } from 'svelte-i18n';

import { SocialItem } from './social';
</script>

<div class="socail_wrapper">
	<div class="item_wrapper">
		{#each SocialItem as item, index}
			<a
				class="social_item"
				href="{item.href}">
				<img
					src="{item.image}"
					alt="" />
			</a>
		{/each}
	</div>
	<div class="more_ques">
		<span>{$t('social.questions')}</span>
	</div>
	<div class="min_social">
		<a
			href="https://telegram.org"
			target="_blank"
			rel="noopener noreferrer">{$t('socialMin.social_min')}</a>
	</div>
</div>

<style>
.socail_wrapper {
	height: 10vh;
	display: flex;
	align-items: center;
}
.item_wrapper {
	height: 100%;
	display: flex;
	align-items: center;
}
.social_item {
	width: 6vh;
	height: 50%;
	background-color: #171b26;
	border: 1px solid #363a45;
	box-sizing: border-box;
	border-radius: 5px;
	margin-right: 5%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 400ms;
}
.social_item img {
	user-select: none;
	height: 50%;
	width: 50%;
}
.social_item:hover {
	background-color: #6660ff40;
	border: 1px solid #6660ff;
	box-sizing: border-box;
}
.more_ques {
	color: #718096;
}
.min_social {
	display: none;
	color: #6660ff;
}
@media screen and (max-width: 1200px) {
	.min_social {
		display: block;
	}
	.item_wrapper {
		display: none;
	}
	.more_ques {
		display: none;
	}
}

@media screen and (max-width: 768px) {
	.socail_wrapper {
		display: none;
	}
}
</style>
