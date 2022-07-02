import axios from "axios";

export async function fetchWorkouts() {
	const res = await axios.get(import.meta.env.VITE_BACKEND_URL);
	return res.data;
}
