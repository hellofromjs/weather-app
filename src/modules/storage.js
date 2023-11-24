const STORAGE_KEY = "my-places"

export const get_storage = () => {
	const storage = localStorage.getItem(STORAGE_KEY);
	return JSON.parse(storage) || [];
}

export const set_storage = (callback) => {
	const new_storage = callback(get_storage())
	localStorage.setItem(STORAGE_KEY, JSON.stringify(new_storage));
}