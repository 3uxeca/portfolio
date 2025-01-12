import { useCallback, useId, useState } from 'react';

import useCommonStore from '@/store/commonStore';
import { ModalKey, ModalProps } from '@/types/IModal';

const useModal = (modalKey: ModalKey) => {
  const { showModal, hideModal } = useCommonStore();

  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    hideModal(id);
  }, [hideModal, id]);

  const openModal = useCallback(
    (modal?: Omit<ModalProps, 'closeModal'>) => {
      hideModal(id);
      setIsOpen(true);
      showModal({ id, modalKey, closeModal, ...modal });
    },
    [closeModal, hideModal, id, modalKey, showModal],
  );

  return { isOpen, openModal };
};

export default useModal;
