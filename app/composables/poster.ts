import { openDB } from "idb";

export const usePoster = () => {
	const getRoomsPermission = async () => {
		
	}

	const saveUserDraft = async () => {
		const db = await openDB("Post");
		db.add("draft", {});
	}

	const getUserDraft = async () => {
		const db = await openDB("Post");
        db.getAll("draft")
	};

	return {
		saveUserDraft,
		getUserDraft
	}
};
