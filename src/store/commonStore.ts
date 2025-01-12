import { create } from 'zustand';

import { IModal } from '@/types/IModal';

type State = {
  modals: IModal[];
  isLoading: boolean;
};

type Actions = {
  showModal: (modal: IModal) => void;
  hideModal: (id: string) => void;
  showLoading: () => void;
  hideLoading: () => void;
};

const initialState: State = {
  modals: [],
  isLoading: false,
};

const useCommonStore = create<State & Actions>((set) => ({
  ...initialState,
  showModal: (modal) => set(({ modals }) => ({ modals: [...modals, modal] })),
  hideModal: (id) => set(({ modals }) => ({ modals: modals.filter((modal) => modal.id !== id) })),
  showLoading: () => set({ isLoading: true }),
  hideLoading: () => set({ isLoading: false }),
}));

export default useCommonStore;
