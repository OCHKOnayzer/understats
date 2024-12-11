<script></script>

<div class="SettingsWrapper">
	<slot />
</div>

<style>
.SettingsWrapper {
	width: 100%;
	margin: 0 auto;
	height: fit-content;
	box-sizing: border-box;
	margin-top: 10px;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
@media (max-width: 678px) {
	.SettingsWrapper {
		border-radius: 24px;
		padding-bottom: 2vh;
		padding-right: 0;
		padding-left: 0;
	}
}
</style>
