<script>
import { t } from 'svelte-i18n';

export let progress = 15;

const currentProgress = (progress / 20) * 100;

console.log(currentProgress);
</script>

<div class="progressWrapper">
	<div class="progressTitle">
		<div>
			<p class="progress_paragraph">
				{$t('other.award_progress')} ({progress}
				{$t('other.out_of')} 20 {$t('other.out_of_awards')})
			</p>
		</div>
		<div class="lastAward--def">
			<span class="lastAwards">{$t('other.last_award')}:&nbsp;&nbsp;</span>
			<span>Король ночных матчей</span>
		</div>
	</div>

	<div class="progressConteiner">
		<div
			class="progress"
			style="width: {(progress / 20) * 100}%"></div>
	</div>
	<div class="lastAward--minW">
		<span class="lastAwards">{$t('other.last_award')}:&nbsp;&nbsp;</span>
		<span>Король ночных матчей</span>
	</div>
	<div class="userStatus">
		<div class="spacer_no_margin">
			<span class="separator {currentProgress >= 0 ? 'get' : ''}">{$t('other.noob')}</span>
			<span class="spacer"></span>
		</div>
		<span class="spacer"></span>
		<span class="spacer"></span>
		<div class="spacer_no_margin">
			<span class="spacer"></span>
			<span class="separator {currentProgress >= 30 ? 'get' : ''}">{$t('other.user')}</span>
			<span class="spacer"></span>
		</div>
		<span class="spacer"></span>
		<span class="spacer"></span>
		<div class="spacer_no_margin">
			<span class="spacer"></span>
			<span class="separator {currentProgress >= 70 ? 'get' : ''}">{$t('other.pro')}</span>
			<span class="spacer"></span>
		</div>
		<span class="spacer"></span>
		<span class="spacer"></span>
		<div class="spacer_no_margin">
			<span class="spacer"></span>
			<span class="separator {currentProgress >= 100 ? 'get' : ''}">{$t('other.legend')}</span>
		</div>
	</div>
</div>

<style>
.progress_paragraph {
	margin-top: 10px;
	margin-bottom: 10px;
}
.progressWrapper {
	height: fit-content;
	box-sizing: border-box;
	margin-top: 10px;
	color: white;
	background: #171b26;
	border-radius: 8px;
	padding: 0 20px;
}

.progressConteiner {
	width: 100%;
	background-color: #20253b;
	height: 20px;
	border-radius: 10px;
	overflow: hidden;
	margin: 10px 0;
}

.progress {
	background: linear-gradient(90deg, rgba(103, 97, 250, 1) 0%, rgba(228, 176, 37, 1) 98%);
	height: 100%;
	transition: width 0.3s;
	border-radius: 0px 10px 10px 0;
	max-width: 100%;
}

.progressTitle {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.lastAwards {
	color: #565f6e;
}

.userStatus {
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}

.separator {
	color: #565f6e;
	display: flex;
	align-items: center;
}

.spacer_no_margin {
	display: flex;
	gap: 1em;
	align-items: center;
}

.get {
	color: #a0a3b1;
}
.spacer {
	width: 0;
	height: 18px;
	border-left: 2px solid #a0a3b17e;
}
.lastAward--minW {
	display: none;
	padding-bottom: 10px;
}
@media (max-width: 1100px) {
	.lastAward--def {
		display: none;
	}
	.lastAward--minW {
		display: block;
	}
	.userStatus {
		display: none;
	}
}
@media (max-width: 768px) {
	.progressWrapper {
		padding: 0 10px;
	}

	.progressTitle {
		flex-direction: column;
		align-items: flex-start;
	}

	.progressTitle p,
	.lastAwards {
		margin: 5px 0;
	}

	.userStatus {
		display: none;
	}

	.spacer {
		height: 12px;
		margin: 0 5px;
	}
}
</style>
