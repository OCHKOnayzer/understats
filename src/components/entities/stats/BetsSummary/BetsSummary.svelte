<script lang="ts">
import { betService } from '$src/services/bet.service';
import { createQuery } from '@tanstack/svelte-query';
import TotalBet from '../TotalBet/TotalBet.svelte';
const params = { express: 'true', ordinar: 'true' };
// const params2 = { express: 'false', ordinar: 'false', page: 1, perPage: 10 };

const data = createQuery({
	queryKey: ['bets count', params],
	queryFn: () => betService.getMyBetsCount(params)
});

// const data2 = createQuery({
// 	queryKey: ['bets count', params],
// 	queryFn: () => betService.getMyBets(params2)
// });
</script>

<div class="flex w-[80%] items-center justify-between gap-4">
	<TotalBet
		title="{String($data.data) + ' ставок'}"
		sum="На сумму 158 000 Р" />
	<TotalBet
		title="{'выигрышей'}"
		sum="На сумму 158 000 Р" />
	<TotalBet
		title="проигрышей"
		sum="На сумму 158 000 Р" />
	<TotalBet
		title="%"
		sum="На сумму 158 000 Р" />
</div>
