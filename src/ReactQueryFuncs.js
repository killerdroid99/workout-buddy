import axios from "axios";

export async function fetchWorkouts() {
	try {
		const res = await axios.get(import.meta.env.VITE_BACKEND_URL);
		return res.data;
	} catch (error) {
		return error;
	}
}

export async function addWorkout(workout) {
	try {
		const res = await axios.post(import.meta.env.VITE_BACKEND_URL, workout);
	} catch (error) {
		return error;
	}
}

export async function deleteWorkout(id) {
	try {
		const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/${id}`);
	} catch (error) {
		return error;
	}
}
