<script>
import { t } from 'svelte-i18n';
let { title } = $$props;
</script>

<div>
	<div class="progressTitle">
		<div class="main_info_wrapper">
			<p class="widget_title">
				{$t(title)}
			</p>
		</div>
	</div>
</div>

<style>
.progressTitle {
	width: 100%;
	align-items: center;
	justify-content: space-between;
	font-size: 20px;
}
.widget_title {
	padding-top: var(--elements-padding);
	margin-bottom: 14px;
}
@media (max-width: 1200px) {
	.main_info_wrapper .widget_title {
		margin: 10px 0px 0px 0px;
	}
}
@media (max-width: 768px) {
	.progressTitle {
		flex-direction: column;
		align-items: flex-start;
		padding-left: 28px;
		font-size: 25px;
	}
}
</style>
