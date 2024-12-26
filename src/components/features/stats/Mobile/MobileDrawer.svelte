<script>
	import * as Drawer from '$components/ui/drawer/index.ts';
	import Badge from '$src/components/ui/badge/badge.svelte';
	import Button from '$src/components/ui/button/button.svelte';
</script>

<Drawer.Root>
	<Drawer.Trigger class="w-full focus:outline-none focus:ring-0">
		<Button class="h-[56px] text-[16px] w-full" variant='card'>Подробнее</Button>
	</Drawer.Trigger>
	<Drawer.Content class="bg-[#20242F] text-white p-4 rounded-[16px] border-none focus:outline-none focus:ring-0">
		<Drawer.Header>
			<Drawer.Title class="text-left text-[30px]">Подробнее</Drawer.Title>
		</Drawer.Header>

		<div class="bg-[#0D111D] rounded-[20px] p-4 mb-[30px]">
			<div class="flex items-center justify-between text-[20px]">
				<div class="">
					<img class="w-[73px] mb-3" src="/icons/bk/winline-big.svg" alt="">
					<h2>Алексей Иванов</h2>
				</div>

				<div>
					<h3>ID 123413</h3>
				</div>
			</div>
		</div>

		<div class="bg-[#171B26] p-4 rounded-[28px]">
			<div class="flex items-center justify-between">
				<img src="/icons/money.svg" alt="">
				<Badge variant='stats' class="">Баланс</Badge>
			</div>

			<div class="mt-[20px]">
				<h4 class="text-[32px]">20 005 000, 00 ₽</h4>
				<Badge variant='destructiveGreen'>+25 000, 00 ₽ · 10%</Badge>
			</div>
		</div>

		<Drawer.Header>
			<Drawer.Title class="text-left text-[30px]">Подробнее</Drawer.Title>
		</Drawer.Header>

		<div class="bg-[#0D111D] rounded-[20px] p-4 mb-[30px]">
			<div class="flex items-center justify-between text-[20px]">
				<div class="">
					<img class="w-[73px] mb-3" src="/icons/bk/winline-big.svg" alt="">
					<h2>Алексей Иванов</h2>
				</div>

				<div>
					<h3>ID 123413</h3>
				</div>
			</div>
		</div>

		<div class="bg-[#171B26] p-4 rounded-[28px]">
			<div class="flex items-center justify-between">
				<img src="/icons/money.svg" alt="">
				<Badge variant='stats' class="">Баланс</Badge>
			</div>

			<div class="mt-[20px]">
				<h4 class="text-[32px]">20 005 000, 00 ₽</h4>
				<Badge variant='destructiveGreen'>+25 000, 00 ₽ · 10%</Badge>
			</div>
		</div>
	</Drawer.Content>
</Drawer.Root>