import { create } from "zustand";

type NewvehicleTypeState = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNewvehicleType = create<NewvehicleTypeState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
