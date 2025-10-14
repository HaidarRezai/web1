import { create } from "zustand";

const amount1Zustand = create((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));

export default amount1Zustand;