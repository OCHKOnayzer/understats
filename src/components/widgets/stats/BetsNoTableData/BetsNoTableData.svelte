<script lang="ts">
interface BetsNoTableDataProps {
	title: string;
	description: string;
}
let { title, description }: BetsNoTableDataProps = $props();
</script>

<div class="flex h-[calc(100vh-280px)] flex-col items-center justify-center gap-3 text-white">
	<img
		src="/icons/stats/statsCharh.svg"
		alt="stats"
		class="h-24 w-24" />
	<h2 class="text-xl font-medium">{title}</h2>
	<p class="max-w-md text-center text-sm text-gray-400"> {description} </p>
</div>
