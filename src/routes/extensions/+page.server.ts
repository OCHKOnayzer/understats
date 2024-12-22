import { error } from '@sveltejs/kit';

import { extensionService } from '$src/services/extensions/extension.service';
import { formatDate } from '$src/utils/functions/formatDate';

export async function load() {
	try {
		const extensionInfo = await extensionService.getExtensionInfo();

		const formattedData = {
			...extensionInfo,
			lastUpdatedDate: formatDate(extensionInfo.lastUpdatedDate)
		};

		return {
			extensionInfo: formattedData
		};
	} catch (err: any) {
		throw error(err.status || 500, err.message || 'Произошла ошибка при загрузке данных');
	}
}
