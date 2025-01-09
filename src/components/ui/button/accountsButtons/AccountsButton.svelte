<script>
import { t } from 'svelte-i18n';
</script>

<button class="accounts_btn">
	<span>
		{$t('extensions.my_acc')}
	</span>
</button>

<style>
.accounts_btn {
	color: white;
	border: 1px solid #6660ff;
	padding: 10px;
	border-radius: 100px;
	/* width: 40%; */
	text-align: center;
	background: transparent;
	transition: 400ms;
}

.accounts_btn:hover {
	cursor: pointer;
	background-color: rgba(240, 248, 255, 0.249);
}

@media (max-width: 768px) {
	.accounts_btn {
		width: 60%;
	}
}

@media (max-width: 480px) {
	.accounts_btn {
		width: 80%;
	}
}
</style>
