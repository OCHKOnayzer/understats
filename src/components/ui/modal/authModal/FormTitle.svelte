<script lang="ts">
interface FormTitleProps {
	modalActie: string;
}

import { t } from 'svelte-i18n';

const { modalActie } = $$props as FormTitleProps;
</script>

<div class="form_title">
	<div class="formLogo">
		<img
			src="assets/menu/logo.png"
			alt="" />
		<span>OneKeepBet</span>
	</div>
	{$t(modalActie)}
</div>

<style>
.form_title {
	font-size: 30px;
	line-height: 32px;
	font-weight: 600;
}
.formLogo {
	display: none;
}
.formLogo img {
	max-height: 34px;
	max-width: 34px;
}
@media screen and (max-width: 768px) {
	.form_title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 0;
		position: relative;
		top: -50px;
	}
	.formLogo {
		display: flex;
		font-size: 18px;
		align-items: center;
	}
}
</style>
