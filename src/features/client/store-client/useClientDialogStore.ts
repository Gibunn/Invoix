import { create } from "zustand";

interface UseClientDialogStore {
	openCreate: boolean;
	setOpenCreate: (o: boolean) => void;
}

export const useClientDialogStore = create<UseClientDialogStore>()((set) => ({
	openCreate: false,
	setOpenCreate: (openCreate) => set({ openCreate }),
}));
