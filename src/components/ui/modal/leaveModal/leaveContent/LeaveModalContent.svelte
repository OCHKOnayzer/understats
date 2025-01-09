<script>
import { t } from 'svelte-i18n';
</script>

<div class="leave_content">
	<div class="title">
		{$t('leave_modal.leave_acc')}
	</div>
	<div class="desc">
		{$t('leave_modal.leave_mail')}
	</div>
</div>

<style>
.leave_content {
	height: 45%;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
}
.title {
	color: white;
	font-size: 20px;
	padding-bottom: 10px;
}
.desc {
	color: #718096;
	font-size: 16px;
}
</style>
