<script>
</script>

<div class="btnExtns">
	<div class="btnWrapper">
		<button class="cicrle_one_active">
			<span class="btn_circle cicrle_two_active">
				<span class="btn_circle_active circle_three_active"> ON </span>
			</span>
		</button>
	</div>
</div>

<style>
.btnExtns {
	height: 50%;
	width: 90%;
	margin: 0 auto;
}

.btnWrapper {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.btnWrapper button {
	cursor: pointer;
	width: 60%;
	height: 60%;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn_circle {
	width: 90%;
	height: 90%;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn_circle_active {
	width: 90%;
	height: 90%;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50px;
	font-weight: 600;
	color: #171b26;
}

.cicrle_one_active {
	border: 2px solid #01d2f9;
	background-color: #0695b4;
	box-shadow: 0 0 40px 10px #01d2f9;
}

.cicrle_two_active {
	border: 2px solid #01d2f9;
	background-color: #0590af;
}

.circle_three_active {
	border: 1px solid #0491ae;
	background-color: #01d2f9;
}
@media (max-width: 1200px) {
	.btnExtns {
		height: 40%;
		width: 75%;
	}
	.btnWrapper button {
		width: 50%;
		height: 50%;
	}

	.btn_circle_active {
		font-size: 40px;
	}
}
@media (max-width: 768px) {
	.btnExtns {
		height: 40%;
		width: 75%;
	}
	.btnWrapper button {
		width: 50%;
		height: 50%;
	}

	.btn_circle_active {
		font-size: 40px;
	}
}

@media (max-width: 480px) {
	.btnWrapper button {
		width: 40%;
		height: 40%;
	}

	.btn_circle_active {
		font-size: 30px;
	}
}
</style>
