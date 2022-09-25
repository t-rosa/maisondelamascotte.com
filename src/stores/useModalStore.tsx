import create from "zustand";

interface ModalState {
  isOpen: boolean;
  type: "success" | "error" | "info" | "loading" | undefined;
  title: string | undefined;
  message: string | undefined;
  open: (
    type: "success" | "error" | "info" | "loading" | undefined,
    title: string,
    message: string
  ) => void;
  close: () => void;
}

const useOverlayStore = create<ModalState>((set) => ({
  isOpen: false,
  type: undefined,
  title: undefined,
  message: undefined,
  open: (type, title, message) =>
    set(() => ({ isOpen: true, type, title, message })),
  close: () => set(() => ({ isOpen: false })),
}));

export default useOverlayStore;
