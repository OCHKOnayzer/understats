<script>
import Button from '$src/components/ui/button/button.svelte';


</script>


<div class="bg-[#363A45] rounded-[20px] text-white p-4">
	<div class="flex items-center justify-between text-[20px]">
		<div class="">
			<img class="w-[73px] mb-3" src="/icons/bk/winline-big.svg" alt="">
			<h2>api.name</h2>
		</div>

		<div>
			<h3>api.id</h3>
		</div>
	</div>

	<div class="grid grid-cols-2 gap-1 mt-4 flex-1 mb-4">
		<div class="flex flex-col items-center justify-between gap-1">
			<div class="bg-[#171B26] rounded-[16px] flex flex-col p-4 w-full">
				<h4>api.balance</h4>
				<p>api.balanceCount</p>
			</div>
			<div class="bg-[#171B26] rounded-[16px] flex flex-col p-4 w-full">
				<h4>api.sum</h4>
				<p>api.sumCount</p>
			</div>
		</div>
		<div class="flex flex-col items-center justify-between">
			<div class="bg-[#171B26] rounded-[16px] flex flex-col p-4 w-full">
				<h4>api.win</h4>
				<p>api.winCount</p>
			</div>
			<div class="bg-[#171B26] rounded-[16px] flex flex-col p-4 w-full">
				<h4>api.bets</h4>
				<p>api.betsCount</p>
			</div>
		</div>
	</div>


<Button class="h-[56px] text-[16px]" variant='card'>Подробнее</Button>
	
</div>

<style>

</style>