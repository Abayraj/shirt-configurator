import { create } from "zustand";

const useModelStore = create((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
  selectedModel: "null", 
  setSelectedModel: (model) => set({ selectedModel: model }),
}));

export default useModelStore;
