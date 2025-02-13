import { create } from "zustand";

const useCalculatorStore = create((set) => ({
  input: "",
  addToInput: (value) =>
    set((state) => {
      if (value === "=") {
        try {
          const result = eval(state.input).toString();
          return { input: result };
        } catch {
          return { input: "Error" };
        }
      }
      return { input: state.input + value };
    }),
  removeLastInput: () => set((state) => ({ input: state.input.slice(0, -1) })),
  clearInput: () => set({ input: "" }),
}));

export default useCalculatorStore;
