<script>
import { t } from 'svelte-i18n';
</script>

<div class="leave_content">
	<div class="title">
		{$t('leave_modal.leave_mail')}
	</div>
</div>

<style>
.leave_content {
	display: flex;
	justify-content: center;
}
.title {
	color: white;
	font-size: 18px;
	padding-bottom: 10px;
	text-align: center;
}
@media screen and (max-width: 800px) {
	.leave_content {
		height: auto;
	}
}
</style>
