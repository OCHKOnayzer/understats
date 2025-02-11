import { error } from '@sveltejs/kit';

import { subscriptionService } from '$src/services/tariffs/subscription.service';

export async function load() {
	try {
		const tariffs = await subscriptionService.getAllTariffs();
		return {
			tariffs: tariffs
		};
	} catch (err: any) {
		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		throw error(err.status || 500, err.message);
	}
}
