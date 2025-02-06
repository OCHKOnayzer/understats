<script>
</script>

<div class="tariffs_alert">
	<div class="alert_container">
		<img
			class="alert_lamp"
			src="icons/lamp.svg"
			alt="" />
		<div class="slot_container">
			<slot />
		</div>
	</div>
</div>

<style>
.tariffs_alert {
	background-color: #171b26;
	width: 100%;
	margin-bottom: var(--elements-padding);
	border-radius: 5px;
}
.alert_lamp {
	height: 24px;
	width: 24px;
}
.alert_container {
	padding: var(--elements-padding);
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
}
.slot_container {
	display: flex;
	justify-content: space-between;
	padding-left: var(--elements-padding);
	width: 100%;
	align-items: center;
}
</style>
