// // src/routes/example/+page.server.ts
// import { error } from '@sveltejs/kit';

// export async function load({ params, fetch }) {
// 	// Имитация запроса к API
// 	const res = await fetch('/api/fake-endpoint');

// 	if (!res.ok) {
// 		// Если API возвращает 404, SvelteKit автоматически передаст статус и ошибку в +error.svelte
// 		throw error(res.status, `Ошибка загрузки данных с кодом ${res.status}`);
// 	}

// 	const data = await res.json();
// 	return { data };
// }
