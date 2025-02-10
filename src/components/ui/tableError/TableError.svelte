<script lang="ts">
interface TableErrorProps {
	error: string;
}

let { error }: TableErrorProps = $props();
</script>

<div class="flex max-w-[500px] flex-col items-center justify-center gap-[24px] rounded-[32px] bg-[#171B26] p-[32px] text-white">
	<img
		src="/icons/error.svg"
		alt="Error"
		class="h-16 w-16" />
	<div class="text-center">
		<h2 class="mb-2 text-[28px] leading-[32px]">Произошла ошибка</h2>
		<p class="text-[15px] leading-[22px] text-gray-400">{error}</p>
	</div>
	<button
		class="rounded-full bg-violet px-6 py-3 text-white transition-colors hover:bg-[#5550ee]"
		on:click="{() => window.location.reload()}">
		Обновить страницу
	</button>
</div>

<style>
:global(.table-error-container) {
	@apply flex h-[calc(100vh-190px)] flex-col items-center justify-center p-4;
}
</style>
