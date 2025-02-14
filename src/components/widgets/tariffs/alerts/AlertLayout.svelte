<script>
</script>

<div class="tariffs_alert">
	<div class="alert_container">
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
	width: 100%;
	align-items: center;
}
@media screen and (max-width: 800px) {
	.tariffs_alert {
		border-radius: 12px;
	}
	.slot_container {
		flex-direction: column;
	}
}
</style>
