<script>
import { t } from 'svelte-i18n';
</script>

<div class="error-wrapper">
	<div class="error-conteiner">
		<img
			src="assets/error.svg"
			alt="" />
	</div>
	<span>{$t('error.notFound_title')}</span>
	<span>hello world</span>
	<a href="/stats">{$t('error.go_home')}</a>
</div>

<style>
.error-wrapper {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
}
.error-conteiner {
	width: 60px;
	height: 60px;
	border-radius: 12px;
	background-color: #363a45;
	display: flex;
	justify-content: center;
	align-items: center;
}
.error-conteiner img {
	height: 60%;
	width: 60%;
}
.error-wrapper span:nth-child(2) {
	font-size: 25px;
}
.error-wrapper span:nth-child(3) {
	font-size: 15px;
}
.error-wrapper a {
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 235px;
	height: 45px;
	background-color: #363a45;
	border-radius: 14px;
}
/* @media screen and (min-width: 2560px) {
            .error-wrapper a{
                width: 245px;
                height: 56px;
                font-size: 18px;
            }
            .error-conteiner{
                width: 80px;
                height: 80px;
            }
        }

        @media screen and (min-width: 3840px) {

        } */
</style>
