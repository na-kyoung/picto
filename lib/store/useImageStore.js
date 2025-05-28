// 이미지 관리
import { create } from 'zustand';

const useImageStore = create((set) => ({
  imageFile: null,

  setImageFile: (file) => set({ imageFile: file }),

  clearImageFile: () => set({ imageFile: null }),
}));

export default useImageStore;