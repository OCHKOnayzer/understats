import { writable } from 'svelte/store';

interface User {
	id: number;
	name: string;
	image: string;
	email: string;
	date: string;
	awards: string;
	level: string;
	add_account: string;
	password: string;
}

export const awards = writable([]);
export const allAwards = writable([]);
export const user = writable<User | null>(null);

export const isMenuOpen = writable(false);

export const openMenu = () => {
	isMenuOpen.set(true);
};
export const closeMenu = () => {
	isMenuOpen.set(false);
};

export async function fetchAwardsData() {
	// try {
	//   const { data: awardsData } = await axios.get(
	//     "http://localhost:3001/awards",
	//   );
	//   awards.set(awardsData);
	//   const { data: allAwardsData } = await axios.get(
	//     "http://localhost:3001/allAwards",
	//   );
	//   allAwards.set(allAwardsData);
	// } catch (error) {
	//   console.error("Ошибка при получении данных:", error);
	// }
}
export async function fetchUser() {
	// try {
	//   const { data }: { data: User[] } = await axios.get(
	//     "http://localhost:3001/users",
	//   );
	//   user.set(data[0]);
	// } catch (error) {
	//   console.error("Ошибка при получении данных:", error);
	// }
}
export async function updateUser(updatedUser: User) {
	// try {
	// 	const response = await axios.put(`http://localhost:3001/users/${updatedUser.id}`, updatedUser);
	// 	console.log('Данные пользователя успешно обновлены:', response.data);
	// 	user.set(response.data);
	// } catch (error: any) {
	// 	console.error(
	// 		'Ошибка при обновлении данных пользователя:',
	// 		error.message,
	// 		error.response ? error.response.data : ''
	// 	);
	// }
}
