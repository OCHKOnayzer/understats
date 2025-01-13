import type { Bet } from '$src/components/widgets/stats/BetsTable/columns';

export function generateBetKey(bet: Bet, index: number): string {
	let timestamp: number;
	try {
		if (bet.dates?.placed) {
			if (typeof bet.dates.placed === 'string') {
				timestamp = new Date(bet.dates.placed).getTime();
			} else if (bet.dates.placed instanceof Date) {
				timestamp = bet.dates.placed.getTime();
			} else {
				const placedStr = JSON.stringify(bet.dates.placed);
				timestamp = new Date(placedStr).getTime();
			}
		} else {
			timestamp = Date.now();
		}
	} catch (e) {
		console.error('Error generating bet key:', e);
		timestamp = Date.now();
	}

	return `${bet.userId || ''}-${bet.clientSeq || ''}-${bet.event?.id || ''}-${timestamp}-${index}`;
}
