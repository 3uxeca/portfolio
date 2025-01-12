import { MODAL_TYPE } from '@/constants';

export type ModalKey = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];

export interface IModal {
  id: string;
  modalKey: ModalKey;
  title?: string;
  body?: string;
  closeButtonVisible?: boolean;
  customData?: any;
  closeModal: () => void;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export type ModalProps = Omit<IModal, 'id' | 'modalKey'>;
