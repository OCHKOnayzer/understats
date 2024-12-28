<script>
import MobileDrawer from './MobileDrawer.svelte';
</script>

<div class="rounded-[20px] bg-[#363A45] p-4 text-white">
	<div class="flex items-center justify-between text-[20px]">
		<div class="">
			<img
				class="mb-3 w-[73px]"
				src="/icons/bk/winline-big.svg"
				alt="" />
			<h2>api.name</h2>
		</div>

		<div>
			<h3>api.id</h3>
		</div>
	</div>

	<div class="mb-4 mt-4 grid flex-1 grid-cols-2 gap-1">
		<div class="flex flex-col items-center justify-between gap-1">
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>api.balance</h4>
				<p>api.balanceCount</p>
			</div>
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>api.sum</h4>
				<p>api.sumCount</p>
			</div>
		</div>
		<div class="flex flex-col items-center justify-between">
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>api.win</h4>
				<p>api.winCount</p>
			</div>
			<div class="flex w-full flex-col rounded-[16px] bg-[#171B26] p-4">
				<h4>api.bets</h4>
				<p>api.betsCount</p>
			</div>
		</div>
	</div>
	<MobileDrawer />
</div>
