<script lang="ts">
import { betService } from '$src/services/bet.service';
import { createQuery } from '@tanstack/svelte-query';
import TotalBet from '../TotalBet/TotalBet.svelte';
const params = { express: 'true', ordinar: 'true' };

const data = createQuery({
	queryKey: ['bets count', params],
	queryFn: () => betService.getMyBetsCount(params)
});

console.log(data);
</script>

<div class="flex w-[80%] items-center justify-between gap-4">
	<TotalBet
		title="{String($data.data) + ' ставок'}"
		sum="На сумму 158 000 Р" />
	<TotalBet
		title="356 выигрышей"
		sum="На сумму 158 000 Р" />
	<TotalBet
		title="356 проигрышей"
		sum="На сумму 158 000 Р" />
	<TotalBet
		title="356 проигрышей"
		sum="На сумму 158 000 Р" />
</div>
