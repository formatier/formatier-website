import { openDB } from "idb";

const usePoster = () => {
	const getUserDraft = async () => {
		const db = await openDB("Post");
        db.getAll("draft")
	};
};
