import { create } from 'zustand';

export const useImageStore = create((set) => ({
  query: '',
  modalImage: null,
  setQuery: (query) => set({ query }),
  setModalImage: (image) => set({ modalImage: image }),
}));
