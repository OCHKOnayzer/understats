<script lang="ts">
interface HeaderInterface {
	headerProps: string;
}
let { headerProps } = $$props as HeaderInterface;
</script>

<div class="header">
	<div class="headerItem">
		<div class="flexConteiner">
			<div class="title">
				<p>{headerProps}</p>
			</div>
			<div class="buttonConteiner">
				<div class="btnWrapper">
					<button>
						<img
							src="assets/image.svg"
							alt="" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
.header {
	height: fit-content;
	box-sizing: border-box;
	padding-top: 10px;
	width: 98%;
	margin: 0 auto;
}

.headerItem {
	height: 8vh;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	color: white;
	background: #171b26;
	border-radius: 8px;
}

.flexConteiner {
	display: flex;
	height: 100%;
	width: 100%;
	padding: 0 0.05% 0 1%;
	justify-content: space-between;
}

.title {
	display: flex;
	align-items: center;
	padding-left: 10px;
}

.buttonConteiner {
	display: flex;
	align-items: center;
	justify-content: center;
}

.btnWrapper {
	height: 30%;
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border: 1px solid rgba(128, 128, 128, 0.582);
	border-radius: 4px;
}

.btnWrapper button {
	height: 50%;
	width: 50%;
	padding: 10px;
	background: transparent;
	border: unset;
	display: flex;
	justify-content: center;
	align-items: center;
}
.headerItem p {
	font-size: 25px;
}

@media screen and (max-height: 800px) {
	.title p {
		font-size: 20px;
	}
}
</style>
