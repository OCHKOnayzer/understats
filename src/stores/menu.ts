import { writable } from 'svelte/store'
interface User {
  id: number
  name: string
  image: string
}
export const awards = writable([])
export const allAwards = writable([])
export const user = writable<User | null>(null)

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
