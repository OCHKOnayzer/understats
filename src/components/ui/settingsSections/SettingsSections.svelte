<script></script>

<div class="SettingsWrapper">
	<slot />
</div>

<style>
.SettingsWrapper {
	width: 100%;
	min-height: 200px;
	height: fit-content;
	box-sizing: border-box;
	margin-bottom: 20px;
	color: white;
	background: #171b26;
	border-radius: 8px;
	padding: 0 20px;
}
@media (max-width: 768px) {
	.SettingsWrapper {
		padding: 0 15px;
	}
}
@media (max-width: 768px) {
	.SettingsWrapper {
		border-radius: 24px;
		padding-bottom: 28px;
		padding-right: 0;
		padding-left: 0;
	}
}
</style>
